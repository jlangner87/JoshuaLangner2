import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import mathcard from './project_images/mathcard.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

function Flashcards () {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate home" className='home_icon'/> </NavLink>
      <h1 className='project_title'>Kids Flashcards</h1>
      <h2 className='project_subtitle'>Static React Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Personal Development</p>
        <p className='project_attribute'>October 2022</p>
      </div>
      <img src={mathcard} className='project_splash' alt="Kid's flashcards application landing page"/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Kids Flashcards</h3>
        <p className='project_summary_body'>This project was made shortly after graduating my immersive program. My daughter was doing some flashcards, and I and I thought a digital flashcard application would be a fun day project to do in vanilla JS.</p>
        <p className='project_summary_body'>As I was making the app, I realized that I could create additional card packs and route them together in React. So I reconfigured the app to work with the React Router DOM, and I added several more card packs.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Kids Flashcards?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/math_quiz'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://flashcards-kids.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/order_form'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/rpg_dice'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Flashcards