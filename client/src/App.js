import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
// Pillar Page
import Splash from './pages/splash'
// Topic Clusters
import AboutMe from './pages/aboutMe'
import BusinessSites from './pages/businessSites'
import EventPages from './pages/eventPages'
import Portfolios from './pages/portfolios'
// Portfolio Projects
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
import Tattoo from './pages/project_pages/amyross'
// Blogs
import Blog1 from './blogs/hashlink'
import Blog2 from './blogs/image-slideshow'
import Blog3 from './blogs/blog3'

function App() {
  return (
    <div className="App">
      <Outlet />
      <Routes>
        {/* Pillar Page */}
        <Route path="/" element={<Splash />} />
        {/* Topic Clusters */}
        <Route path="/portfolio" element={<AboutMe />} />
        <Route path="/business-sites" element={<BusinessSites />} />
        <Route path="/event-pages" element={<EventPages />} />
        <Route path="/portfolio-pages" element={<Portfolios />} />
        {/* Portfolio Projects */}
        <Route path="/portfolio/alice-python" element={<Alice />} />
        <Route path="/portfolio/rpg-dice" element={<Dice />} />
        <Route path="/portfolio/order-form" element={<Lindsay />} />
        <Route path="/portfolio/PERN-recipes" element={<Recipes />} />
        <Route path="/portfolio/PERN-wikibean" element={<WikiBean />} />
        <Route path="/portfolio/vue-rock-paper-scissors" element={<RpsVue />} />
        <Route path="/portfolio/teacher-portfolio" element={<Caleb />} />
        <Route path="/portfolio/flashcards" element={<Flashcards />} />
        <Route path="/portfolio/shop-spencer" element={<ShopSpencer />} />
        <Route path="/portfolio/moderator-app" element={<Modmin />} />
        <Route path="/portfolio/tattoo" element={<Tattoo />} />
        {/* Blogs */}
        <Route path="/blogs/adhd-working-from-home" element={<Blog3 />} />
      </Routes>
      <br></br>
      <Footer />
    </div>
  )
}

export default App
