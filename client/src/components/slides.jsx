import './slideshow.css'
import { NavLink } from 'react-router-dom'
import wikibean from '../project_images/wikibean.png'
import lindsay from '../project_images/lindsay.png'
import recipes from '../project_images/recipes.png'
import dice from '../project_images/dice.png'
import alice from '../project_images/alice.png'
import rpsvue from '../project_images/rpsvue.png'


function SlideShow() {
  return (
<div className="slideshow">
  
  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>WikiBean</h3>
  <h4 className='slide_subtitle'>PERN Application</h4>
  <img src={wikibean} alt="wikibean app photo" className='slide'/>
  <p className='project_annotation'>School Project</p>
  </NavLink>
  </div>
  

  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>Team Lindsay</h3>
  <h4 className='slide_subtitle'>React Forms</h4>
  <img src={lindsay} alt="team lindsay app photo" className='slide'/>
  <p className='project_annotation'>Freelance Project</p>
  </NavLink>
</div>


  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>Recipes for Me</h3>
  <h4 className='slide_subtitle'>PERN Application</h4>
  <img src={recipes} alt="recipes for me app photo" className='slide'/>
  <p className='project_annotation'>School Team Project</p>
  </NavLink>
</div>


  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>RPG Dice Roller</h3>
  <h4 className='slide_subtitle'>Static React Application</h4>
  <img src={dice} alt="dice roller app photo" className='slide'/>
  <p className='project_annotation'>Personal Project</p>
  </NavLink>
</div>


  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>Alice's Adventures</h3>
  <h4 className='slide_subtitle'>CLI Game in Python</h4>
  <img src={alice} alt="alice's adventures in python photo" className='slide'/>
  <p className='project_annotation'>School Project</p>
  </NavLink>
</div>


  <div className='slide_container'>
  <NavLink to='/portfolio/PERN_wikibean'>
  <h3 className='slide_title'>Rock Paper Scissors</h3>
  <h4 className='slide_subtitle'>Static Vue Application</h4>
  <img src={rpsvue} alt="rock paper scissors in vue photo" className='slide'/>
  <p className='project_annotation'>School Project</p>
  </NavLink>
</div>

</div>

  )
}

export default SlideShow