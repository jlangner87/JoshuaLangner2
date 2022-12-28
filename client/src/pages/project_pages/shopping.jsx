import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import shopping_spree from './project_images/shopping_spree.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'
import icon_react from './project_images/react.png'
import html from './project_images/html.png'
import javascript from './project_images/javascript.png'
import css from './project_images/css.png'

function ShopSpencer() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title' id='#top'>Virtual Shopping Spree</h1>
      <h2 className='project_subtitle'>Static React Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Individual Project</p>
        <p className='project_attribute'>Volunteer Freelance</p>
        <p className='project_attribute'>December 2022</p>
      </div>
      <img src={shopping_spree} className='project_splash'/>
      <div className='tech_container'>
          <img className='tech_icon' src={html} alt="html 5" />
          <img className='tech_icon' src={css} alt="c.s.s. 3" />
          <img className='tech_icon' src={javascript} alt="javascript" />
          <img className='tech_icon' src={icon_react} alt="react" />
        </div>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About Virtual Shopping Spree</h3>
        <p className='project_summary_body'>Having previously worked in retail, I know very well that the week leading up to Christmas is a huge part of the annual business results for the local businesses in our community.</p>
        <p className='project_summary_body'>In the weeks before Christmas, our community had several major winter weather events that forced many businesses to close down. A friend of mine owns a boutique. He posted on his business page inviting people who would have stopped in to purchase an electronic gift card instead.</p>
        <p className='project_summary_body'>I had an idea. <em>What if I built a page where community members could go on a virtual shopping spree for electronic gift cards?</em></p>
        <p className='project_summary_body'>I set to work, using React, React Forms, and EmailJs to build the application. It was December 23rd, so I did not have time to mess around. Using the development skills I have built up and “templating” from previous projects, I was able to turn out this project from conception to public deployment in just over 4 hours.
</p>
        <p className='project_summary_body'>Once the holiday season is over, I am going to reconfigure the site to include more options and style it so that it is more polished and fits a more “year-round” theme.</p>
      </div>
      <div className='project_links_container'>
      <h3 className='project_links_title'>Still want to see more about Virtual Shopping Spree?</h3>
      <div className='project_logo_container'>
        <a href='https://github.com/jlangner87/shop_spencer'>
          <img src={repo} alt="github logo label: project repo link" className='project_icon'/>
        </a>
        <a href='https://shopspencer.netlify.app/egift_cards'>
          <img src={link} alt="internet icon label: deployed link" className='project_icon'/>
        </a>
      </div>
      </div>
      <div className='project_nav_container'>
        <NavLink to='/portfolio/moderator_app'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/teacher_portfolio'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default ShopSpencer