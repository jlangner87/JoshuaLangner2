import './slideshow.css'
import wikibean from '../project_images/wikibean.png'
import lindsay from '../project_images/lindsay.png'
import recipes from '../project_images/recipes.png'
import dice from '../project_images/dice.png'
import alice from '../project_images/alice.png'
import rpsvue from '../project_images/rpsvue.png'


function SlideShow() {
  return (
    <div className="slider_container">
  <div className="slider">
    <div className='slides'>
    <img src={wikibean} alt="wikibean app photo" className='slide' id='slide1'/>
    <img src={lindsay} alt="team lindsay app photo" className='slide' id='slide2'/>
    <img src={recipes} alt="recipes for me app photo" className='slide' id='slide3'/>
    <img src={dice} alt="dice roller app photo" className='slide' id='slide4'/>
    <img src={alice} alt="alice's adventures in python photo" className='slide' id='slide5'/>
    <img src={rpsvue} alt="rock paper scissors in vue photo" className='slide' id='slide6'/>
  </div>
  </div>
</div>
  )
}

export default SlideShow