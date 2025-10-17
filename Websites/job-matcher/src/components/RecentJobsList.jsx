import './RecentJobsList.css'

const RecentJob = [
    { title: 'Frontend Developer', company: 'Acme Corp', location: 'Remote', description: 'Build amazing web applications.', salary: '$80k-$120k', image: '/src/assets/job1.png' },
    { title: 'Product Designer', company: 'Studio X', location: 'San Francisco, CA', description: 'Design user-centric products.', salary: '$90k-$130k', image: '/src/assets/job2.png' },
    { title: 'Sales Associate', company: 'Marketly', location: 'New York, NY', description: 'Drive sales and build client relationships.', salary: '$70k-$110k', image: '/src/assets/job3.png' },
    { title: 'Data Analyst', company: 'DataWorks', location: 'Chicago, IL', description: 'Analyze and interpret complex data sets.', salary: '$85k-$125k', image: '/src/assets/job4.png' },
    { title: 'Marketing Manager', company: 'BrandBoost', location: 'Austin, TX', description: 'Lead marketing campaigns and strategies.', salary: '$95k-$140k', image: '/src/assets/job5.png' },
    { title: 'Backend Developer', company: 'Tech Solutions', location: 'Seattle, WA', description: 'Develop robust backend systems.', salary: '$100k-$150k', image: '/src/assets/job6.png' },
]


export default function RecentJobList() {
    return (
        <section className="jobs">
            <div className="container">
                <h2>Recent Jobs</h2>
                <div className="jobs__grid">
                    {RecentJob.map((j, i) => (
                        <article key={i} className="job-card">
                            <div className="job-image">
                                <img src={j.image} alt={j.title} />
                            </div>
                            <div className="job-content">
                                <div className="job-header">
                                    <h3>{j.title}</h3>
                                    <div className="job-actions">
                                        <button className="btn btn--outline">View</button>
                                        <button className="btn btn--primary">Apply</button>
                                    </div>
                                </div>
                                <p className="description">{j.description}</p>
                                <div className="footer-info">
                                    <div className="salary">{j.salary}</div>
                                    <div className="company">{j.company}</div>
                                    <div className="location">{j.location}</div>
                                </div>
                            </div>
                        </article>

                    ))}
                </div>
            </div>
        </section>
    )
}
