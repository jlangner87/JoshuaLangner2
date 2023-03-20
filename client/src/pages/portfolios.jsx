import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import home from '../elements/home_icon.png'
import header from '../elements/portfolio_header.png'
import Contact from '../components/contact'
import amyross_sample1 from '../elements/amyross_sample1.png'
import amyross_sample2 from '../elements/amyross_sample2.png'

function Portfolios() {

  return (
    <div className="page">
      <Helmet>
      <title>Joshua Langner WebDev | Professional Portfolios</title>
      <meta name="description" content="A custom portfolio site is a simple way to gather all of your best work and professional information in one place and show it off."/>
      </Helmet>
      <NavLink to='/'> <img src={home} alt="navigate home" className='icon'/> </NavLink>
      <img src={header} alt="professional portfolio website development service" className='header_logo'/>
      <h1 className='page_title'>professional portfolio website development service</h1>
      <div className='page_content'>
        <h1 className='page_content_header'><span className='bracket'>&#123;</span> Showcase you <span className='bracket'>&#125;</span></h1>
        <p className='services_content_catch'>Whether you are a creative running a freelance gig or a business professional climbing the corporate ladder, you’ve got mad skills! And you <em>deserve</em> to show them off!</p>
        <h3 className='services_content_subheader'>What is a Custom Portfilio?</h3>
        <p className='services_content_body'>A custom portfolio site is a simple way to gather all of your best work and professional information in one place and show it off.</p>
        <h3 className='services_content_subheader'>Why a Custom Portfilio?</h3>
        <p className='services_content_body'>Online presence has become one of the most important parts of the job market. Custom portfolio sites give you that presence. They also give you control and creative freedom of what it looks like.
          No cookie cutter templates. No preset forms leaving out crucial information. Just 100% you!</p>
        <p className='services_content_action'>Smash some limits with me and showcase you the way you want to.<br/>Your vision! Your style! Your way!</p>
        <p className='services_content_note'>Pricing varies depending on the scope of the project. You can request a free estimate below.</p>
      </div>
      <div className='page_content'>
        <h1 className='page_content_header'><span className='bracket'>&#123;</span> Sample Work <span className='bracket'>&#125;</span></h1>
        <div className='sample_container'>
          <h3 className='sample_title'>Tattoo Artist Portfolio</h3>
          <p className='sample_text'>This professional portfolio website is custom-built to give the tattoo artist's work the exposure it deserves. It provides potential clients with a comprehensive overview of her skills, style, and portfolio. The mobile-first design allows for an easy-to-navigate layout that makes it simple to browse the artist's work and find what they're looking for.</p>
          <div className='sample_image_container'>
            <img src={amyross_sample2} className="sample"/>
            <img src={amyross_sample1} className="sample"/>
          </div>
          <a className='sample_link' href='https://amyross-tattoo.netlify.app/'>Explore this site</a>
        </div>
      </div>
      <div className='page_content'>
      <h1 className='page_content_header'><span className='bracket'>&#123;</span> Let's get started <span className='bracket'>&#125;</span></h1>
        <Contact/>
      </div>
    </div>
  )
}

export default Portfolios