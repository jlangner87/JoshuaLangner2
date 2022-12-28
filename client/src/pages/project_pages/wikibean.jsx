import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import wikibean from './project_images/wikibean.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'
import psql from './project_images/postgresql.png'
import node from './project_images/node.png'

function WikiBean() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>WikiBean</h1>
      <h2 className='project_subtitle'>PERN APPLICATION</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>General Assembly Software Engineering Immersive</p>
        <p className='project_attribute'>September 2022</p>
      </div>
      <img src={wikibean} className='project_splash'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
          <img className='tech_icon' src={psql} alt="postgresql" />
          <img className='tech_icon' src={node} alt="node" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About WikiBean</h3>
        <p className='project_summary_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus in lorem sit amet consectetur. Etiam porttitor risus sit amet lacinia volutpat. Maecenas semper pellentesque consectetur. Suspendisse placerat vitae neque at rhoncus. Proin mollis dapibus eros, nec vehicula est sollicitudin nec. Nullam dignissim sem nunc, at dictum dolor tempus nec. Ut ornare eros libero, vel malesuada mauris rutrum at.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about WikiBean?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/roaster_roster_client'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://wikibean.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
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

export default WikiBean