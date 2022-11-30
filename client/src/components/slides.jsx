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
      <div id="slides_1" class="slide">
        <img src={wikibean} alt="wikibean app photo" className='slide'/>
        <a class="slide__prev" href="#slides_6" title="Next"></a>
        <a class="slide__next" href="#slides_2" title="Next"></a>
      </div>
      <div id="slides_2" class="slide">
        <img src={lindsay} alt="team lindsay app photo" className='slide'/>
        <a class="slide__prev" href="#slides_1" title="Next"></a>
        <a class="slide__next" href="#slides_3" title="Next"></a>
      </div>
      <div id="slides_3" class="slide">
        <img src={recipes} alt="recipes for me app photo" className='slide'/>
        <a id='light_bkg' class="slide__prev" href="#slides_2" title="Next"></a>
        <a id='light_bkg' class="slide__next" href="#slides_4" title="Next"></a>
      </div>
      <div id="slides_4" class="slide">
        <img src={dice} alt="dice roller app photo" className='slide'/>
        <a class="slide__prev" href="#slides_3" title="Next"></a>
        <a class="slide__next" href="#slides_5" title="Next"></a>
      </div>
      <div id="slides_5" class="slide">
        <img src={alice} alt="alice's adventures in python photo" className='slide'/>
        <a class="slide__prev" href="#slides_4" title="Next"></a>
        <a class="slide__next" href="#slides_6" title="Next"></a>
      </div>  
      <div id="slides_6" class="slide">
        <img src={rpsvue} alt="rock paper scissors in vue photo" className='slide'/>
        <a class="slide__prev" href="#slides_5" title="Next"></a>
        <a class="slide__next" href="#slides_1" title="Next"></a>
      </div>    
    </div>
  </div>
</div>
  )
}

export default SlideShow