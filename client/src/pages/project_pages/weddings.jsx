import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import wedding_sample from "../project_pages/project_images/wedding_sample.png"
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

function WeddingSample() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate to home" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Wedding Websites</h1>
      <h2 className='project_subtitle'>STATIC REACT APPLICATION</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Freelance Web Development</p>
        <p className='project_attribute'>March 2023</p>
      </div>
      <img src={wedding_sample} className='project_splash' alt='team Tattoo order form'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Wedding Websites</h3>
        <p className='project_summary_body'>Starting in 2023, I began providing custom wedding websites as a freelance service.</p>
        <p className='project_summary_body'>I consult with the engaged couple to determine the overall style of the wedding and gather pertinent information that they want to communicate with their guests.</p>
        <p className='project_summary_body'>Each website is built using React and features a contact section built from React Forms and the EMAILjs SDK.</p>
        <p className='project_summary_body'>While this could easily be a dynamic full stack application, the idea is to give the couple a hands-off experience. As the wedding progresses, they can email me any changes that they want to implement, and I make the changes for them.</p>
      </div>

      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Wedding Websites</h3>
      <div className='project_logo_container'>
        {/* <a href='https://github.com/jlangner87/amyross_tattoo'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a> */}
        <a href='https://bridges-wedding.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/ROR-repo'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/tattoo'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default WeddingSample