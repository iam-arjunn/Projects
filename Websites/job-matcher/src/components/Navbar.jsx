import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [signupOpen, setSignupOpen] = useState(false)
  const [forgotOpen, setForgotOpen] = useState(false)
  const [role, setRole] = useState('candidate') // 'candidate' | 'recruiter'
  const [showLoginPassword, setShowLoginPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showSignupConfirm, setShowSignupConfirm] = useState(false)

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') {
        setLoginOpen(false)
        setSignupOpen(false)
      }
    }
    window.addEventListener('keydown', onKey)
    function onOpenLogin() { setLoginOpen(true); setSignupOpen(false) }
    function onOpenSignup() { setSignupOpen(true); setLoginOpen(false) }
    window.addEventListener('open-login', onOpenLogin)
    window.addEventListener('open-signup', onOpenSignup)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('open-login', onOpenLogin)
      window.removeEventListener('open-signup', onOpenSignup)
    }
  }, [])

  return (
    <header className={`navbar ${open ? 'open' : ''}`} role="banner">
      <div className="navbar__inner">
        <a href="#" className="navbar__logo" aria-label="Job Matcher home">
          <span className="logo__blue" />
          <span className="logo__white">JM</span>
        </a>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="hamburger" />
        </button>

        <nav className="navbar__nav" role="navigation">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Candidates</a></li>
            <li><a href="#">Employers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className="navbar__actions">
          <button
            className="btn btn--outline"
            onClick={() => {
              setLoginOpen(true)
              setSignupOpen(false)
            }}
          >
            Login
          </button>
          <button
            className="btn btn--primary"
            onClick={() => {
              setSignupOpen(true)
              setLoginOpen(false)
            }}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Login Modal (portal) */}
      {loginOpen && createPortal(
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <header className="modal__header">
              <h2>Login</h2>
              <button className="modal__close" onClick={() => setLoginOpen(false)} aria-label="Close">×</button>
            </header>
            <div className="modal__tabs">
              <button type="button" className={role === 'candidate' ? 'active' : ''} onClick={() => setRole('candidate')}>Candidate</button>
              <button type="button" className={role === 'recruiter' ? 'active' : ''} onClick={() => setRole('recruiter')}>Recruiter</button>
            </div>
            <form
              className="modal__body"
              onSubmit={(e) => {
                e.preventDefault()
                // On login submit, open signup modal as requested
                setLoginOpen(false)
                setSignupOpen(true)
              }}
            >
              <label htmlFor="login-username">Username</label>
              <input id="login-username" name="username" type="text" required />
              <label htmlFor="login-password">Password</label>
              <div className="password-field">
                <input id="login-password" name="password" type={showLoginPassword ? 'text' : 'password'} required />
                <button type="button" className="password-toggle" onClick={() => setShowLoginPassword((s) => !s)} aria-label="Toggle password visibility">{showLoginPassword ? 'Hide' : 'Show'}</button>
              </div>
              <div className="modal__remember">
                <input id="login-remember" name="remember" type="checkbox" />
                <label htmlFor="login-remember">Remember me</label>
              </div>
              <div className="modal__meta">
                <button type="button" className="linkish" onClick={() => { setLoginOpen(false); setForgotOpen(true); }}>Forgot password?</button>
              </div>
              <div className="modal__actions">
                <button type="button" className="btn btn--outline" onClick={() => setLoginOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn--primary">Login</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* Signup Modal (portal) */}
      {signupOpen && createPortal(
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <header className="modal__header">
              <h2>Sign Up</h2>
              <button className="modal__close" onClick={() => setSignupOpen(false)} aria-label="Close">×</button>
            </header>
            <div className="modal__tabs">
              <button type="button" className={role === 'candidate' ? 'active' : ''} onClick={() => setRole('candidate')}>Candidate</button>
              <button type="button" className={role === 'recruiter' ? 'active' : ''} onClick={() => setRole('recruiter')}>Recruiter</button>
            </div>
            <form
              className="modal__body"
              onSubmit={(e) => {
                e.preventDefault()
                // here you'd normally handle signup; close for now
                setSignupOpen(false)
              }}
            >
              <label htmlFor="signup-username">Username</label>
              <input id="signup-username" name="username" type="text" required />
              <label htmlFor="signup-password">Password</label>
              <div className="password-field">
                <input id="signup-password" name="password" type={showSignupPassword ? 'text' : 'password'} required />
                <button type="button" className="password-toggle" onClick={() => setShowSignupPassword((s) => !s)} aria-label="Toggle password visibility">{showSignupPassword ? 'Hide' : 'Show'}</button>
              </div>
              <label htmlFor="signup-confirm">Confirm Password</label>
              <div className="password-field">
                <input id="signup-confirm" name="confirm" type={showSignupConfirm ? 'text' : 'password'} required />
                <button type="button" className="password-toggle" onClick={() => setShowSignupConfirm((s) => !s)} aria-label="Toggle password visibility">{showSignupConfirm ? 'Hide' : 'Show'}</button>
              </div>
              <div className="modal__actions">
                <button type="button" className="btn btn--outline" onClick={() => setSignupOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn--primary">Create account</button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* Forgot Password Modal */}
      {forgotOpen && createPortal(
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <header className="modal__header">
              <h2>Reset password</h2>
              <button className="modal__close" onClick={() => setForgotOpen(false)} aria-label="Close">×</button>
            </header>
            <form className="modal__body" onSubmit={(e) => { e.preventDefault(); setForgotOpen(false); }}>
              <p>Enter your account email and we'll send reset instructions.</p>
              <label htmlFor="forgot-email">Email</label>
              <input id="forgot-email" name="email" type="email" required />
              <div className="modal__actions">
                <button type="button" className="btn btn--outline" onClick={() => setForgotOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn--primary">Send email</button>
              </div>
            </form>
          </div>
        </div>, document.body
      )}
    </header>
  )
}
