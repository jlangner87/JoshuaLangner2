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
        <p className='splash_text'><span className='directory'> ~ </span>Check out my info below, and let's smash some limits together. <span className="blinking-cursor">⌷</span></p>
      </div>
      <div className='splash_nav'>
      <NavLink to='/portfolio'><img src={aboutNav} alt="about me resume and portfolo" className='nav_tile'/></NavLink>
      <NavLink to='/business-sites'><img src={businessNav} alt="services: business websites" className='nav_tile'/></NavLink>
      <NavLink to='/portfolio-pages'><img src={portfoloNav} alt="services: professional portfolios" className='nav_tile'/></NavLink>
      <NavLink to='/event-pages'><img src={weddingNav} alt="services: wedding and event pages" className='nav_tile'/></NavLink>
      </div>
      <h1 className='splash_header'>Blogs & Articles by Joshua Langer</h1>
      <div className='blogs'>
        <div className='blog_container'>
          <a href='https://medium.com/@josh-langner/time-saving-react-components-hashlink-887e76fc4e05'>
            <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*PZ4S2wd-Ia6poz390Rp6cA.png" alt="Title: Time saving tips for react: hashlink" className='blog_image'/>
          </a>
          <a href='https://medium.com/@josh-langner/time-saving-react-components-hashlink-887e76fc4e05'>
            <h2 className='blog_title'>Time Saving Tips for React | HashLink</h2>
          </a>
          <p className='blog_meta_description'>React Router's Hashlink can help you shave time off your development process. In this article, I cover what it is, when you should use it, and provide a step-by-step walk-through for implementing in your React application.</p>
          <p className='blog_meta_description'> Hosted at: <a href='https://medium.com/@josh-langner'>medium.com/@josh-langner</a></p>
        </div>

      </div>




    </div>
  )
}

export default Splash