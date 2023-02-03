import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import modmin from './project_images/modmin.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'


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
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Moderator Application</h3>
        <p className='project_summary_body'>In the winter of 2018, I started a Facebook group for drivers in Northwest Iowa to report and seek up to date road conditions, so that they could make informed travel decisions.</p>
        <p className='project_summary_body'>In the winter of 2022, membership jumped to over 21,000. I was so excited that the group was helping so many, but with the boost in numbers came some growing pains.</p>
        <p className='project_summary_body'>Between dealing with the spam accounts and internet trolls and the helping new members navigate the group, the current moderation team needed help.</p>
        <p className='project_summary_body'>The other administrators were leery about putting out an announcement and just accepting anybody. We needed an application process.</p>
        <p className='project_summary_body'>I set to work building a static React application using React Forms to gather applicant information and EmailJs to compile the information into readable emails for the administrators to review.</p>
        <p className='project_summary_body'>With the new year coming up fast, and more storms in the forecast, we needed the new moderators fast. I was able to bring this project to public deployment in just about 10 hours.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Virtual Shopping Spree?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/modmin_app'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://modminapp.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/tattoo'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/shop-spencer'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Modmin