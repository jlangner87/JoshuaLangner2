import { NavLink } from 'react-router-dom'
import home from '../elements/home_icon.png'
import header from '../elements/business_header.png'
import Contact from '../components/contact'

function BusinessSites() {
  return (
    <div className="page">
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
      <img src={header} alt="business website development service" className='header_logo'/>
      <div className='page_content'>
        <h1 className='page_content_header'><span className='bracket'>&#123;</span> Elevate Your Business <span className='bracket'>&#125;</span></h1>
        <p className='services_content_catch'>The local men and women who pour themselves into their businesses and non-profits are the backbone of our communities. And you <em>deserve</em> to have those efforts supported with the best tools. </p>
        <h3 className='services_content_subheader'>What is a custom business site?</h3>
        <p className='services_content_body'>A custom business site is a simple way to create touch points with your customers or clients to engage with them in the ways that your business uniquely needs.</p>
        <p className='services_content_body'>The types of engagement can be anything the imagination can dream up, but here are some common examples to get your ideas flowing:</p>
        <div className='services_content_list'>
          <p className='services_content_list_item'>Online menus</p>
          <p className='services_content_list_item'>Reservations</p>
          <p className='services_content_list_item'>Online ordering</p>
          <p className='services_content_list_item'>Up to date info</p>
          <p className='services_content_list_item'>Contact portals </p>
          <p className='services_content_list_item'>And so much more...</p>
        </div>
        <h3 className='services_content_subheader'>Why a Custom business site?</h3>
        <p className='services_content_body'>When someone is looking for a new product or service, the first thing they do is hit the search engines. If a business does not have an eye catching and user friendly online presence, they are losing potential customers.
While social media is a useful tool, custom websites add credibility to your brand and customization too the way your business engages with the community.</p>
        <p className='services_content_action'>Smash some limits with me and elevate your business to new levels!</p>
        <p className='services_content_note'>Pricing varies depending on the scope of the project. You can request a free estimate below.</p>
      </div>
      <div className='page_content'>
      <h1 className='page_content_header'><span className='bracket'>&#123;</span> Let's get started <span className='bracket'>&#125;</span></h1>
        <Contact/>
      </div>
    </div>
  )
}

export default BusinessSites