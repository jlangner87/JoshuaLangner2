import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import home from '../elements/home_icon.png'
import header from '../elements/events_header.png'
import Contact from '../components/contact'


function EventPages() {
  return (
    <div className="page">
      <Helmet>
      <title>Joshua Langner WebDev | Event Pages</title>
      <meta name="description" content="Joshua Langner WebDev has created a custom service that simplifies the process by providing you with a high-quality, fully customizable website that reflects your personal style and creates cohesion between all of your wedding elements."/>
      </Helmet>
      <NavLink to='/'> <img src={home} alt="navigate home" className='icon'/> </NavLink>
      <img src={header} alt="wedding and event pages development service" className='header_logo'/>
      <h1 className='page_title'>Wedding and event pages development service</h1>
      <div className='page_content'>
        <h1 className='page_content_header'><span className='bracket'>&#123;</span> Simplify Your Day <span className='bracket'>&#125;</span></h1>
        <p className='services_content_catch'>For whatever occasion you are celebrating, <em>congratulations!</em> It is your big day, and you <em>deserve</em> for it to be simple and enjoyable!</p>
        <h3 className='services_content_subheader'>What is a custom wedding page?</h3>
        <p className='services_content_body'>A wedding website is the ideal place to store all your wedding-related documents, photos, contact information and checklist items in one spot where your guests can access everything easily. You can also use it to send out announcements, keep track of RSVPs and provide answers to any questions your guests may have about the big day - all in one convenient place!</p>
        <p className='services_content_body'>Joshua Langner WebDev has created a custom service that simplifies the process by providing you with a high-quality, fully customizable website that reflects your personal style and creates cohesion between all of your wedding elements.</p>
        <h3 className='services_content_subheader'>Why a custom wedding page?</h3>
        <p className='services_content_body'>When it comes to wedding websites, there are two main options; self-service or custom built. </p>
        <p className='services_content_body'>Self-service sites often seem like a simple way to get your planning process started. However, they take a lot of effort and time to set up — adding unnecessary stress to the already overwhelming process of planning a wedding. Meanwhile, creative expression is limited to pre-designed templates.</p>
        <p className='services_content_body'>Custom built wedding websites are designed specifically for each couple and give the opportunity to showcase the couple's style and personality in every detail. Couples can truly capture the spirit of their special day with the perfect design elements tailored just for them. And all of the hard work is done by someone else, enabling them to relax and enjoy the planning process.
</p>
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