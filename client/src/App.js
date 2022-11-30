import './App.css'
import { Routes, Route } from 'react-router-dom'
import Splash from './pages/splash'
import AboutMe from './pages/aboutMe'
import BusinessSites from './pages/businessSites'
import EventPages from './pages/eventPages'
import Portfolios from './pages/portfolios'
import Alice from './pages/project_pages/alice'
import Dice from './pages/project_pages/dice'
import Lindsay from './pages/project_pages/lindsay'
import Recipes from './pages/project_pages/recipes'
import WikiBean from './pages/project_pages/wikibean'
import RpsVue from './pages/project_pages/rpsvue'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/business_sites" element={<BusinessSites />} />
        <Route path="/event_pages" element={<EventPages />} />
        <Route path="/portfolios_pages" element={<Portfolios />} />
        <Route path="/portfolio/alice_python" element={<Alice />} />
        <Route path="/portfolio/rpg_dice" element={<Dice />} />
        <Route path="/portfolio/order_form" element={<Lindsay />} />
        <Route path="/portfolio/PERN_recipes" element={<Recipes />} />
        <Route path="/portfolio/PERN_wikibean" element={<WikiBean />} />
      </Routes>
    </div>
  )
}

export default App
