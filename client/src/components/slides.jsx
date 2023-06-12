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
import shopping from '../project_images/shopping_spree.png'
import modmin from '../project_images/modmin.png'
import amyross from '../project_images/amyross.png'
import ror from "../project_images/ror_stages.png"
import wedding_sample from "../project_images/wedding_sample.png"


function SlideShow() {
  return (
    <div className="slideshow">
      
      <div className='slide_container'>
        <HashLink to='/portfolio/ROR-repo'>
        <h3 className='slide_title'>Ruby on Rails Learning</h3>
        <h4 className='slide_subtitle'>Documentation of Learning</h4>
        <img src={ror} alt="Screenshot of github readme" className='slide'/>
        <p className='project_annotation'>February 2023 - Present</p>
        </HashLink>
        </div>

        <div className='slide_container'>
        <HashLink to='/portfolio/wedding-sample'>
        <h3 className='slide_title'>Wedding Pages</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={wedding_sample} alt="website splash page screenshot. Jayden & Jared 5.25.2024" className='slide'/>
        <p className='project_annotation'>January 2023</p>
        </HashLink>
        </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/tattoo'>
        <h3 className='slide_title'>Tattoo Portfolio</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={amyross} alt="art gallery of tattoos" className='slide'/>
        <p className='project_annotation'>January 2023</p>
        </HashLink>
        </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/moderator-app'>
        <h3 className='slide_title'>Moderator Application</h3>
        <h4 className='slide_subtitle'>React Forms</h4>
        <img src={modmin} alt="online application form for moderators of a facebook group" className='slide'/>
        <p className='project_annotation'>December 2022</p>
        </HashLink>
        </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/shop-spencer'>
        <h3 className='slide_title'>Vierual Shopping Spree</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={shopping} alt="shop spencer list of businesses offering electronic gift cards" className='slide'/>
        <p className='project_annotation'>December 2022</p>
        </HashLink>
        </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/teacher-portfolio'>
        <h3 className='slide_title'>Teaching Portfolio</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={caleb} alt="caleb landner: teaching portfolio" className='slide'/>
        <p className='project_annotation'>September 2022 - Ongoing</p>
        </HashLink>
        </div>
      <div className='slide_container'>
        <HashLink to='/portfolio/order-form'>
        <h3 className='slide_title'>Team Lindsay</h3>
        <h4 className='slide_subtitle'>React Forms</h4>
        <img src={lindsay} alt="team lindsay order form app" className='slide'/>
        <p className='project_annotation'>October 2022</p>
        </HashLink>
      </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/flashcards'>
        <h3 className='slide_title'>Flashcards for Kids</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={mathcard} alt="flash card: multiply numbers by 5. 7 times 5 = quesion mark" className='slide'/>
        <p className='project_annotation'>October 2022</p>
        </HashLink>
      </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/rpg_dice#top'>
        <h3 className='slide_title'>RPG Dice Roller</h3>
        <h4 className='slide_subtitle'>Static React Application</h4>
        <img src={dice} alt="role playing game dice roller app" className='slide'/>
        <p className='project_annotation'>October 2022</p>
        </HashLink>
      </div>
        
        <div className='slide_container'>
        <HashLink to='/portfolio/PERN_wikibean#top'>
        <h3 className='slide_title'>WikiBean</h3>
        <h4 className='slide_subtitle'>PERN Application</h4>
        <img src={wikibean} alt="wikibean app" className='slide'/>
        <p className='project_annotation'>September 2022</p>
        </HashLink>
        </div>

        <div className='slide_container'>
        <HashLink to='/portfolio/vue_rock-paper-scissors#top'>
        <h3 className='slide_title'>Rock Paper Scissors</h3>
        <h4 className='slide_subtitle'>Static Vue Application</h4>
        <img src={rpsvue} alt="rock paper scissors in vue" className='slide'/>
        <p className='project_annotation'>September 2022</p>
        </HashLink>
      </div>

      <div className='slide_container'>
        <HashLink to='/portfolio/alice_python#top'>
        <h3 className='slide_title'>Alice's Adventures</h3>
        <h4 className='slide_subtitle'>CLI Game in Python</h4>
        <img src={alice} alt="alice's adventures in python" className='slide'/>
        <p className='project_annotation'>August 2022</p>
        </HashLink>
      </div>

        <div className='slide_container'>
        <HashLink to='/portfolio/PERN-recipes#top'>
        <h3 className='slide_title'>Recipes for Me</h3>
        <h4 className='slide_subtitle'>PERN Application</h4>
        <img src={recipes} alt="recipes for me app" className='slide'/>
        <p className='project_annotation'>August 2022</p>
        </HashLink>
      </div>
    </div>
  )
}

export default SlideShow