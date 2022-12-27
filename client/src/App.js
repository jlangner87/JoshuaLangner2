import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
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
import Footer from './components/footer'
import Caleb from './pages/project_pages/caleb'
import Flashcards from './pages/project_pages/flashcards'
import ShopSpencer from './pages/project_pages/shopping'
import Modmin from './pages/project_pages/modmin'

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/business_sites" element={<BusinessSites />} />
        <Route path="/event_pages" element={<EventPages />} />
        <Route path="/portfolio_pages" element={<Portfolios />} />
        <Route path="/portfolio/alice_python" element={<Alice />} />
        <Route path="/portfolio/rpg_dice" element={<Dice />} />
        <Route path="/portfolio/order_form" element={<Lindsay />} />
        <Route path="/portfolio/PERN_recipes" element={<Recipes />} />
        <Route path="/portfolio/PERN_wikibean" element={<WikiBean />} />
        <Route path="/portfolio/vue_rock-paper-scissors" element={<RpsVue />} />
        <Route path="/portfolio/teacher_portfolio" element={<Caleb />} />
        <Route path="/portfolio/flashcards" element={<Flashcards />} />
        <Route path="/portfolio/shop_spencer" element={<ShopSpencer />} />
        <Route path="/portfolio/moderator_app" element={<Modmin />} />
      </Routes>
      <br></br>
      <Footer />
    </div>
  )
}

export default App
