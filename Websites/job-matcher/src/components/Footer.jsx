import './Footer.css'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4>JobMatcher</h4>
            <p className="muted">Helping you find the right career.</p>
          </div>
          <div>
            <h5>Company</h5>
            <ul>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h5>Support</h5>
            <ul>
              <li>FAQ</li>
              <li>Privacy</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
