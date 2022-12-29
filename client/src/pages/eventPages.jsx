import { NavLink } from 'react-router-dom'
import home from '../elements/home_icon.png'
import header from '../elements/events_header.png'
import Contact from '../components/contact'


function EventPages() {
  return (
    <div className="page">
      <NavLink to='/'> <img src={home} alt="navigate home" className='icon'/> </NavLink>
      <img src={header} alt="wedding and event pages development service" className='header_logo'/>
      <div className='page_content'>
        <h1 className='page_content_header'><span className='bracket'>&#123;</span> Simplify Your Day <span className='bracket'>&#125;</span></h1>
        <p className='services_content_catch'>For whatever occasion you are celebrating, <em>congratulations!</em> It is your big day, and you <em>deserve</em> for it to be simple and enjoyable!</p>
        <h3 className='services_content_subheader'>What is a custom event page?</h3>
        <p className='services_content_body'>An event page is a central hub for all of the important information surrounding your event. It is a place where you can direct your guests for everything you need them to know.</p>
        <h3 className='services_content_subheader'>Why a custom event page?</h3>
        <p className='services_content_body'>Pulling off a wedding or any other event is no small feat. There is so much that goes into it. From invitations and RSVPs to gift registries and all the million things in between. Event pages give you simplicity and control over relaying important information between you and your guests—taking weight off of your shoulders and giving you the mental freedom to enjoy every moment.</p>
        <p className='services_content_action'>Smash some limits with me and celebrate your big day your way! <br/>Organized. Easy. Enjoyable. </p>
        <p className='services_content_note'>Pricing varies depending on the scope of the project. You can request a free estimate below.</p>
      </div>
      <div className='page_content'>
      <h1 className='page_content_header'><span className='bracket'>&#123;</span> Let's get started <span className='bracket'>&#125;</span></h1>
        <Contact/>
      </div>
    </div>
  )
}

export default EventPages