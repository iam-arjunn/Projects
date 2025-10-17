import './CategoriesGrid.css'

const categories = ['Engineering','Design','Product','Sales','Marketing','Finance']

export default function CategoriesGrid(){
  return (
    <section className="categories-section">
      <div className="container">
        <h2>Job Categories</h2>
        <div className="categories-grid">
          {categories.map(c => (
            <div key={c} className="category-tile">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
