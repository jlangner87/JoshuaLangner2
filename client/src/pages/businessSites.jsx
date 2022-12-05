import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import home from '../elements/home_icon.png'
import header from '../elements/business_header.png'
import Contact from '../components/contact'

function BusinessSites() {
  return (
    <div className="page">
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
      <img src={header} alt="business website development service" className='header_logo' id='#top'/>
      <div className='page_content'>
        <h1 className='page_content_header'>&#60; Showcase you &#47;&#62;</h1>
        <p className='services_content_catch'>Whether you are a creative running a freelance gig or a business professional climbing the corporate ladder, you’ve got mad skills! And you <b>deserve</b> to show them off!</p>
        <h3 className='services_content_subheader'>What is a Custom Portfilio?</h3>
        <p className='services_content_body'>A custom portfolio site is a simple way to gather all of your best work and professional information in one place and show it off.</p>
        <h3 className='services_content_subheader'>Why a Custom Portfilio?</h3>
        <p className='services_content_body'>Online presence has become one of the most important parts of the job market. Custom portfolio sites give you that presence. They also give you control and creative freedom of what it looks like.
No cookie cutter templates. No preset forms leaving out crucial information. Just 100% you!</p>
        <p className='services_content_action'>Smash some limits with me and showcase you the way you want to.<br/>Your vision! Your style! Your way!</p>
        <p className='services_content_note'>Pricing varies depending on the scope of the project. You cna request a free estimate below.</p>
      </div>
      <div className='page_content'>
      <h1 className='page_content_header'>&#60; Let's get started &#47;&#62;</h1>
        <Contact/>
      </div>
    </div>
  )
}

export default BusinessSites