import './FeaturedSteps.css'

export default function FeaturedSteps(){
  return (
    <section className="steps">
      <div className="container">
        <h2>How it works</h2>
        <p className="muted">Quick steps to find your dream job</p>
        <div className="steps__grid">
          <div className="step">
            <img className="step__icon" src="/src/assets/step1.svg" alt="Register icon" />
            <h3>Register Your Account</h3>
            <p className="muted">Create an account and complete your profile to get started.</p>
          </div>
          <div className="step">
            <img className="step__icon" src="/src/assets/step2.svg" alt="Upload resume icon" />
            <h3>Upload Your Resume</h3>
            <p className="muted">Add your CV so employers can find you.</p>
          </div>
          <div className="step">
            <img className="step__icon" src="/src/assets/step3.svg" alt="Apply icon" />
            <h3>Apply for Dream Job</h3>
            <p className="muted">Apply quickly and track your applications.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
