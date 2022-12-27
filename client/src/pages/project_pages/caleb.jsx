import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import caleb from './project_images/caleb.png'

function Caleb() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate home" className='home_icon'/> </NavLink>
      <h1 className='project_title'>Teaching Portfolio</h1>
      <h2 className='project_subtitle'>Static React Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Volunteer Freelance</p>
        <p className='project_attribute'>September 2022 - Ongoing</p>
      </div>
      <img src={caleb} className='project_splash' alt='caleb langner: teaching portfolio application landing page'/>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About this Teaching Portfolio</h3>
        <p className='project_summary_body'>This was the first project I took on after graduating from my immersive. I wanted a project with real world application, and I wanted to work with a real client and address real needs.</p>
        <p className='project_summary_body'>My brother is a teacher, and he had a professional portfolio hosted on Weebly. The information was outdated, and he was not completely happy with the layout of the content. He agreed to let me build and deploy a new portfolio.</p>
        <p className='project_summary_body'>For this project, I worked directly with my client to learn his needs and address them with the application. Once I had a full understanding, of the scope of the project, I focused on learning and applying UI design concepts, and building ADA accessibility into a static React application.</p>
        <p className='project_summary_body'>This project is listed as ongoing because, I have evolved so much since I originally built it. My skills have been sharpened, and and I have more tools at my disposal. </p>
        <p className='project_summary_body'>Upcoming features include:</p>
        <ul className='project_summary_list'>
        <li className='project_summary_list_item'>Contact Form</li>
        <li className='project_summary_list_item'>MongoDB/Express Backend to allow the client to update his own content</li>
        </ul>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about this Teaching Portfolio?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/caleb_langner'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://caleb-langner.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/shop_spencer'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/order_form'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Caleb