import './slideshow.css'
import { HashLink } from 'react-router-hash-link'
import wikibean from '../project_images/wikibean.png'
import lindsay from '../project_images/lindsay.png'
import recipes from '../project_images/recipes.png'
import dice from '../project_images/dice.png'
import alice from '../project_images/alice.png'
import rpsvue from '../project_images/rpsvue.png'
import caleb from '../project_images/caleb.png'
import mathcard from '../project_images/mathcard.png'


function SlideShow() {
  return (
<div className="slideshow">

<div className='slide_container'>
  <HashLink to='/portfolio/teacher_portfolio'>
  <h3 className='slide_title'>Teaching Portfolio</h3>
  <h4 className='slide_subtitle'>Static React Application</h4>
  <img src={caleb} alt="wikibean app photo" className='slide'/>
  <p className='project_annotation'>September 2022 - Ongoing</p>
  </HashLink>
  </div>
<div className='slide_container'>
  <HashLink to='/portfolio/order_form#top'>
  <h3 className='slide_title'>Team Lindsay</h3>
  <h4 className='slide_subtitle'>React Forms</h4>
  <img src={lindsay} alt="team lindsay app photo" className='slide'/>
  <p className='project_annotation'>October 2022</p>
  </HashLink>
</div>

<div className='slide_container'>
  <HashLink to='/portfolio/order_form#top'>
  <h3 className='slide_title'>Flashcards for Kids</h3>
  <h4 className='slide_subtitle'>Static React Application</h4>
  <img src={mathcard} alt="team lindsay app photo" className='slide'/>
  <p className='project_annotation'>October 2022</p>
  </HashLink>
</div>

<div className='slide_container'>
  <HashLink to='/portfolio/rpg_dice#top'>
  <h3 className='slide_title'>RPG Dice Roller</h3>
  <h4 className='slide_subtitle'>Static React Application</h4>
  <img src={dice} alt="dice roller app photo" className='slide'/>
  <p className='project_annotation'>October 2022</p>
  </HashLink>
</div>
  
  <div className='slide_container'>
  <HashLink to='/portfolio/PERN_wikibean#top'>
  <h3 className='slide_title'>WikiBean</h3>
  <h4 className='slide_subtitle'>PERN Application</h4>
  <img src={wikibean} alt="wikibean app photo" className='slide'/>
  <p className='project_annotation'>September 2022</p>
  </HashLink>
  </div>

  <div className='slide_container'>
  <HashLink to='/portfolio/vue_rock-paper-scissors#top'>
  <h3 className='slide_title'>Rock Paper Scissors</h3>
  <h4 className='slide_subtitle'>Static Vue Application</h4>
  <img src={rpsvue} alt="rock paper scissors in vue photo" className='slide'/>
  <p className='project_annotation'>September 2022</p>
  </HashLink>
</div>

<div className='slide_container'>
  <HashLink to='/portfolio/alice_python#top'>
  <h3 className='slide_title'>Alice's Adventures</h3>
  <h4 className='slide_subtitle'>CLI Game in Python</h4>
  <img src={alice} alt="alice's adventures in python photo" className='slide'/>
  <p className='project_annotation'>August 2022</p>
  </HashLink>
</div>

  <div className='slide_container'>
  <HashLink to='/portfolio/PERN_recipes#top'>
  <h3 className='slide_title'>Recipes for Me</h3>
  <h4 className='slide_subtitle'>PERN Application</h4>
  <img src={recipes} alt="recipes for me app photo" className='slide'/>
  <p className='project_annotation'>August 2022</p>
  </HashLink>
</div>
</div>
  )
}

export default SlideShow