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
import video from './project_images/video_demo.png'

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
        <p className='project_summary_body'>This was assigned as a final project for my software engineering immersive. The criteria were to build and deploy a web application with both a front and back end, using any tech stack we preferred. The application needed a minimum of 3 models, full CRUD (create, read, update, delete) capability accessible to users on the front end. The overall content was to solve a problem relating to something that we were passionate about.</p>
        <p className='project_summary_body'>I am passionate about coffee roasted by small businesses, and I hate scraping the bottom of Google to find new roasters. WikiBean was born.</p>
        <p className='project_summary_body'>I created this application with the PERN stack. I built 4 associated models: “Beans,” “Roasters,” and “Retailers.” Then I created more than 15 endpoints and routes to return Bean selections based on the “Origin,” “Roast,” “Grind,” “Organic,” “Roaster,” “Retailer,” and more. The crown jewel of the project was my “custom search” feature that allowed users to search for beans by combining multiple parameters.</p>
        <p className='project_summary_body'>Then I created a custom styled React front end complete with routes for users to access all of my endpoints via a front-end API call.</p>
        <p className='project_summary_body'><em>This project was originally hosted on Heroku. The front-end is currently hosted on Netlify, and the back-end is not currently hosted anywhere.</em></p>
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
        <a href='https://youtu.be/Vz6ppOBLPCg'>
          <img src={video} alt="youtube logo link: Video Demo" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/rpg-dice'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/vue-rock-paper-scissors'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default WikiBean