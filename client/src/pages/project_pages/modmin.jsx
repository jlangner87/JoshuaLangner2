import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import modmin from './project_images/modmin.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'

function Modmin() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Moderator Application</h1>
      <h2 className='project_subtitle'>React Forms</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Volunteer Freelance</p>
        <p className='project_attribute'>December 2022</p>
      </div>
      <img src={modmin} className='project_splash'/>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Moderator Application</h3>
        <p className='project_summary_body'>quick</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Virtual Shopping Spree?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/shop_spencer'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://modminapp.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/PERN_recipes'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/shop_spencer'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Modmin