import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import lindsay from './project_images/lindsay.png'
import feedback from './project_images/feedback.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

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
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Team Lindsay</h3>
        <p className='project_summary_body'>This was a particularly fun project for me because It came to me organically.</p>
        <p className='project_summary_body'>A local business owner was holding a fundraiser, and she was struggling with a technical aspect of the event. She was trying to create a Google Forms order form, but it lacked the customization that she needed.</p>
        <p className='project_summary_body'>I spoke with her about what she needed and set out to build an application to meet those needs.</p>
        <p className='project_summary_body'>I used React.Js and Node.js to create this application. I focused on state management and using React Hooks to manage the state of the form appropriately. Then I researched several options for submitting the form to the client. In the end, I determined that EmailJs was the best option to fit their needs. I took some time to learn the tool and successfully integrated in into their application</p>
        <h3 className='project_summary_title'>Client Feedback</h3>
        <img src={feedback} alt="client feedback for this application: I gave him a brief idea of an order form i needed and he turned it into something amazing" className='project_artifact' />
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
        <NavLink to='/portfolio/teacher-portfolio'>
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