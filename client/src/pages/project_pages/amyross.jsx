import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import amyross from './project_images/amyross.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

function Tattoo() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate to home" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Tattoo Portfolio</h1>
      <h2 className='project_subtitle'>STATIC REACT APPLICATION</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Freelance Web Development</p>
        <p className='project_attribute'>January 2023</p>
      </div>
      <img src={amyross} className='project_splash' alt='team Tattoo order form'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Tattoo Portfolio</h3>
        <p className='project_summary_body'>...</p>
        <p className='project_summary_body'>...</p>
        <p className='project_summary_body'>...</p>
        <p className='project_summary_body'>...</p>
      </div>

      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Team Tattoo?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/amyross_tattoo'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://amyross-tattoo.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/PERN-recipes'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/moderator-app'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Tattoo