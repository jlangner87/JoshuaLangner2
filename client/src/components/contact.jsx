import emailjs from 'emailjs-com'
import { useState } from 'react'
import emailLogo from '../elements/emaillogo.png'
import gitlogo from '../elements/gitlogo.png'
import youtubelogo from '../elements/youtube.png'
import linkedinLogo from '../elements/linklogo.png'

function Contact() {
  return (
    <div className="contact_card">
      <div className='page_content'>
      <h1 className='page_content_header'>Conect with Me</h1>
    
      </div>
      <h3 className='skill_header'>Send me a message here!</h3>
      <div className='contact_form'>
        <form>
          <label htmlFor='first_name'>First Name</label>
          <input id='first_name' placeholder='First Name'></input>
          <label htmlFor='last_name'>Last Name</label>
          <br/>
          <input id='last_name' placeholder='Last Name'></input>
          <label htmlFor='email'>Email</label>
          <input id='email' placeholder='example@email.com'></input>
          <br/>
          <label htmlFor='message'>Message:</label>
          <textarea id='message' placeholder='Type your message here.' rows='4' cols='50'></textarea>
          <br/>
          <button>Send</button>
        </form>
      </div>
      <h3 className='skill_header'>Or find me on any of these platforms!</h3>
      <div className='socials_container'>
        <a href='mailto: joshua.langner.dev@gmail.com'><img src={emailLogo} alt="email link logo" className='social_icon'/></a>
        <a href='https://www.linkedin.com/in/josh-langner/'><img src={linkedinLogo} alt="linked in link logo" className='social_icon'/></a>
        <a href='https://www.youtube.com/channel/UCQGVw18qWx3C6A3o0h7lspA'><img src={youtubelogo} alt="you tube link logo" className='social_icon'/></a>
        <a href='https://github.com/jlangner87'><img src={gitlogo} alt="git hub link logo" className='social_icon'/></a> 
      </div>
    </div>
  )
}

export default Contact