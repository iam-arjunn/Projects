import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Search from './components/Search'
import FeaturedSteps from './components/FeaturedSteps'
import CategoriesGrid from './components/CategoriesGrid'
import RecentJobsList from './components/RecentJobsList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
  <main style={{ paddingTop: '96px' }}>
  <Search />
  <FeaturedSteps />
  <CategoriesGrid />
  <RecentJobsList />
  <Footer />
        {/* Removed default Vite demo content to keep homepage focused */}
      </main>
    </>
  )
}

export default App
