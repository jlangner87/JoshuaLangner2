import { NavLink } from 'react-router-dom'
import header from '../elements/banner2.png'
import aboutNav from '../elements/aboutme.png'
import businessNav from '../elements/business.png'
import weddingNav from '../elements/weddings.png'
import portfoloNav from '../elements/portfolios.png'

function Splash() {
  return (
    <div className="page">
      <img src={header} alt="octopus in curly braces logo. joshua langner web developer" className='splash_header_logo'/>
      <div className='splash_container'>
        <div className='terminal_bar'>
          <div id='red'></div>
          <div id='yellow'></div>
          <div id='green'></div>
        </div>
        <h2 className='splash_subheading'>A Catchy Title</h2>
        <p className='splash_text'>&#91;→ blah blah blah blah</p>
        <p className='splash_text'>&#91;→ blah blah blah blah</p>
        <p className='splash_text'>&#91;→ blah blah blah blah</p>
        <p className='splash_text'>&#91;→ blah blah blah blah</p>
        <p className='splash_text'>→ ~ <span class="blinking-cursor">⌷</span></p>
      </div>
      <div className='splash_nav'>
      <NavLink to='/portfolio'><img src={aboutNav} alt="about me resume and portfolo" className='nav_tile'/></NavLink>
      <NavLink to='/business_sites'><img src={businessNav} alt="business websites" className='nav_tile'/></NavLink>
      <NavLink to='/portfolio_pages'><img src={portfoloNav} alt="professional portfolios" className='nav_tile'/></NavLink>
      <NavLink to='/event_pages'><img src={weddingNav} alt="wedding and event pages" className='nav_tile'/></NavLink>
      </div>

    </div>
  )
}

export default Splash