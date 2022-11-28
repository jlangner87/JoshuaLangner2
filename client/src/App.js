import './App.css'
import { Routes, Route } from 'react-router-dom'
import Splash from './pages/splash'
import AboutMe from './pages/aboutMe'
import BusinessSites from './pages/businessSites'
import EventPages from './pages/eventPages'
import Portfolios from './pages/portfolios'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/about_me" element={<AboutMe />} />
        <Route path="/business_sites" element={<BusinessSites />} />
        <Route path="/event_pages" element={<EventPages />} />
        <Route path="/portfolios" element={<Portfolios />} />
      </Routes>
    </div>
  )
}

export default App
