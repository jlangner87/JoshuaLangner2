import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import recipes from './project_images/recipes.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import video from './project_images/video_demo.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'
import psql from './project_images/postgresql.png'
import node from './project_images/node.png'

function Recipes() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Recipes for Me</h1>
      <h2 className='project_subtitle'>PERN APPLICATION</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Team Project</p>
        <p className='project_attribute'>General Assembly Software Engineering Immersive</p>
        <p className='project_attribute'>August 2022</p>
      </div>
      <img src={recipes} className='project_splash'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
          <img className='tech_icon' src={psql} alt="postgresql" />
          <img className='tech_icon' src={node} alt="node" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Recipes For Me</h3>
        <p className='project_summary_body'>This project was built by a dev team consisting of four junior developers.</p>
        <p className='project_summary_body'>I was responsible for building the PostgreSQL database, the Express.Js server and routing the endpoints.</p>
        <p className='project_summary_body'>I created three associated models: ‘Users,” “Recipes,” and “Categories.” Then I created endpoints for full CRUD (create, read, update, delete) capability on the “Recipes” and “Users” models. When that was finished, I stepped into the role of styling the page with custom CSS.</p>
        <p className='project_summary_body'>The other developers on the team were responsible for, creating a React front end, implementing JWT authentication, calling the backend API from the front end, and making ADA accessibility compliant web forms.</p>
        <p className='project_summary_body'>I also acted as a team manager— identifying strengths and opportunities in teammates and allocating responsibilities accordingly; strategically scheduling milestones and keeping a productive cadence with periodic stand-ups and open communication.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Recipes?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jengriffin/Recipes-For-Me-'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://obscure-reef-40887.herokuapp.com/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
        <a href='https://youtu.be/nLbX0npgjlw'>
          <img src={video} alt="youtube logo link: Video Demo" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/alice_python'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/tattoo'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>

      </div>
    </div>
  )
}

export default Recipes