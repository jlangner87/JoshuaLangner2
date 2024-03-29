import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import dice from './project_images/dice.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

function Dice() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="navigate home" className='home_icon'/> </NavLink>
      <h1 className='project_title'>RPG Dice Roller</h1>
      <h2 className='project_subtitle'>Static React Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Personal Development</p>
        <p className='project_attribute'>October 2022</p>
      </div>
      <img src={dice} className='project_splash' alt='rpg dice roller application landing page'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About RPG Dice Roller</h3>
        <p className='project_summary_body'>Just before graduation, our instructor told us that we should do personal projects based on concepts that were challenging for us. At that point, React state management was that thing.</p>
        <p className='project_summary_body'>I was at rehearsal for a play, and some cast members were playing a RPG in the greenroom. I thought <em>I could make an app that functions as a dice roller, AND I could hone in on my state management skills.</em> Win-win.</p>
        <p className='project_summary_body'>I got a really good handle on state and Hooks doing this project, and it set me up for success. The Team Lindsay project came immediately after this one, and I was ready to tackle the state of a multi-part order form.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about RPG Dice Roller?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/dnd_dice'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://rpg-dice.netlify.app/'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/flashcards'>
          <img src={previous} alt="navigate to previous project" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/PERN-wikibean'>
          <img src={next} alt="navigate to next project" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Dice