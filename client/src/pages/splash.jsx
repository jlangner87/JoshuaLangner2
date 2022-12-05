import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import header from '../elements/banner2.png'
import aboutNav from '../elements/aboutme.png'
import businessNav from '../elements/business.png'
import weddingNav from '../elements/weddings.png'
import portfoloNav from '../elements/portfolios.png'

function Splash() {
  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  });
  return (
    <div className="page">
      <img src={header} alt="octopus in curly braces logo. joshua langner web developer" className='splash_header_logo'/>
      <div className='splash_container'>
        <div className='terminal_bar'>
          <div id='red'></div>
          <div id='yellow'></div>
          <div id='green'></div>
          <p className='terminal_bar_title'>📁 welcome_message⎯jlangner@Joshuas-MacBook</p>
        </div>
        <h2 className='splash_subheading'>Welcome...</h2>
        <p className='splash_text'><span className='directory'> ~ </span>I am a software engineer and web developer.</p>
        <p className='splash_text'><span className='directory'> ~ </span>I spent a decade in tech support… helping people work through app and website problems. Most of the problems were simply the limitations of the tech.</p>
        <p className='splash_text'><span className='directory'> ~ </span>We had to accept that these limitations were just how it is. But I wanted to make my own software—to test the limits and break them.</p>
        <p className='splash_text'><span className='directory'> ~ </span>Now I build my own web applications that are fun to look at and easy to use.</p>
        <p className='splash_text'><span className='directory'> ~ </span>So... Do you want to break some limits with me? <span class="blinking-cursor">⌷</span></p>
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