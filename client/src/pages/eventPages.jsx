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
        <p className='services_content_catch'>For whatever you are celebrating, <em>Congratulations!</em> It is your big day! nd you <em>deserve</em> it to be as simple as possible— leaving room for you to enjoy every moment!</p>
        <h3 className='services_content_subheader'>What is a custom event page?</h3>
        <p className='services_content_body'>A custom event page is blah blah blah blah blah blah blah blah blah blah blah blah .</p>
        <h3 className='services_content_subheader'>Why a custom event page?</h3>
        <p className='services_content_body'>This and that and the other thing... Blah blah blah...</p>
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