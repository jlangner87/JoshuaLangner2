import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import alice from './project_images/alice.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'

function Alice() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title'>Alice's Adventures</h1>
      <h2 className='project_subtitle'>CLI GAME IN PYTHON</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>General Assembly Software Engineering Immersive</p>
        <p className='project_attribute'>August 2022</p>
      </div>
      <img src={alice} className='project_splash'/>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Alice's Adventures</h3>
        <p className='project_summary_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus in lorem sit amet consectetur. Etiam porttitor risus sit amet lacinia volutpat. Maecenas semper pellentesque consectetur. Suspendisse placerat vitae neque at rhoncus. Proin mollis dapibus eros, nec vehicula est sollicitudin nec. Nullam dignissim sem nunc, at dictum dolor tempus nec. Ut ornare eros libero, vel malesuada mauris rutrum at.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Alice's Adventures?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/control_flow_Py'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/rpg_dice'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/vue_rock-paper-scissors'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Alice