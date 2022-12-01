import { NavLink } from 'react-router-dom'
import './Projects.css'
import home from './project_images/home_icon.png'
import dice from './project_images/dice.png'
import repo from './project_images/repo.png'
import link from './project_images/link.png'
import previous from './project_images/previous.png'
import next from './project_images/next.png'

function Dice() {
  return (
    <div className="page">
      <NavLink to='/portfolio'> <img src={home} alt="home icon" className='home_icon'/> </NavLink>
      <h1 className='project_title'>RPG Dice Roller</h1>
      <h2 className='project_subtitle'>Static React Application</h2>
      <div className='project_attribute_container'>
        <p className='project_attribute'>Personal Project</p>
        <p className='project_attribute'></p>
        <p className='project_attribute'>October 2022</p>
      </div>
      <img src={dice} className='project_splash'/>
      <div className='project_summary'>
        <h3 className='project_summary_title'>About RPG Dice Roller</h3>
        <p className='project_summary_body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rhoncus in lorem sit amet consectetur. Etiam porttitor risus sit amet lacinia volutpat. Maecenas semper pellentesque consectetur. Suspendisse placerat vitae neque at rhoncus. Proin mollis dapibus eros, nec vehicula est sollicitudin nec. Nullam dignissim sem nunc, at dictum dolor tempus nec. Ut ornare eros libero, vel malesuada mauris rutrum at.</p>
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
        <NavLink to='/portfolio/PERN_recipes'>
          <img src={previous} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
        <NavLink to='/portfolio/alice_python'>
          <img src={next} alt="previous project icon" className='project_nav_icon'/>
        </NavLink>
      </div>
    </div>
  )
}

export default Dice