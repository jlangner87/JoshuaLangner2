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
      <div className='splash_container' alt='mac os terminal window'>
        <div className='terminal_bar'>
          <div id='red'></div>
          <div id='yellow'></div>
          <div id='green'></div>
          <p className='terminal_bar_title'>📁 welcome_message⎯jlangner@Joshuas-MacBook</p>
        </div>
        <h2 className='splash_subheading'>Welcome...</h2>
        <p className='splash_text'><span className='directory'> ~ </span>I am a software engineer and web developer.</p>
        <p className='splash_text'><span className='directory'> ~ </span>I spent a decade in tech support— helping customers work through app and website problems. Most of the problems were simply the limitations of the tech.</p>
        <p className='splash_text'><span className='directory'> ~ </span>We had to accept that tech was just limited. But I wanted to make my own tech— to test the limits and smash them.</p>
        <p className='splash_text'><span className='directory'> ~ </span>Now I am seeking a career as a software engineer. I also use my skills to build web applications that are fun to look at and easy to use.</p>
        <p className='splash_text'><span className='directory'> ~ </span>Check out my info below, and let's smash some limits together. <span class="blinking-cursor">⌷</span></p>
      </div>
      <div className='splash_nav'>
      <NavLink to='/portfolio'><img src={aboutNav} alt="about me resume and portfolo" className='nav_tile'/></NavLink>
      <NavLink to='/business_sites'><img src={businessNav} alt="services: business websites" className='nav_tile'/></NavLink>
      <NavLink to='/portfolio_pages'><img src={portfoloNav} alt="services: professional portfolios" className='nav_tile'/></NavLink>
      <NavLink to='/event_pages'><img src={weddingNav} alt="services: wedding and event pages" className='nav_tile'/></NavLink>
      </div>

    </div>
  )
}

export default Splash