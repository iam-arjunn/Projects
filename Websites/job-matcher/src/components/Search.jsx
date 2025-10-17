import './Search.css'

export default function Hero() {

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <h1>Find your next great opportunity</h1>
          <p>Search thousands of jobs from top employers and connect with recruiters. Fast, simple, and tailored to you.</p>

          <div className="search-row">
            <div className="search-col">
              <label>What</label>
              <input placeholder="Job title, keywords or company" />
            </div>
            <div className="search-col">
              <label>Where</label>
              <input placeholder="City, state, or remote" />
            </div>
            <div className="search-actions">
              <button className="btn btn--primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
