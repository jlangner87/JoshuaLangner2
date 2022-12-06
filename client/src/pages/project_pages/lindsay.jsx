import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import lindsay from './project_images/lindsay.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'

function Lindsay() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate to home" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Team Lindsay</h1>
      <h2 className='project_subtitle'>REACT FORMS</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Freelance Web Development</p>
        <p className='project_attribute'>October 2022</p>
      </div>
      <img src={lindsay} className='project_splash' alt='team lindsay order form'/>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Team Lindsay</h3>
        <p className='project_summary_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus in lorem sit amet consectetur. Etiam porttitor risus sit amet lacinia volutpat. Maecenas semper pellentesque consectetur. Suspendisse placerat vitae neque at rhoncus. Proin mollis dapibus eros, nec vehicula est sollicitudin nec. Nullam dignissim sem nunc, at dictum dolor tempus nec. Ut ornare eros libero, vel malesuada mauris rutrum at.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Team Lindsay?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/teamlindsay'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://teamlindsay.netlify.app'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/teacher_portfolio'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/flashcards'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Lindsay