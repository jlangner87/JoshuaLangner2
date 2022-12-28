import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import rpsvue from './project_images/rpsvue.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'
import vue from './project_images/vue.png'

function RpsVue() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Rock Paper Scissors</h1>
      <h2 className='project_subtitle'>Static Vue Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>General Assembly Software Engineering Immersive</p>
        <p className='project_attribute'>August 2022</p>
      </div>
      <img src={rpsvue} className='project_splash'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={vue} alt="vue" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Rock Paper Scissors</h3>
        <p className='project_summary_body'>This project was an assignment for my software engineering immersive.</p>
        <p className='project_summary_body'>Key learnings: Passing props between components in VUE.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Rock Paper Scissors?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/rps_vue'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://vue-rpsgame.netlify.app'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/PERN_wikibean'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/alice_python'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default RpsVue