import emailjs from 'emailjs-com'
import { useState } from 'react'
import emailLogo from '../elements/emaillogo.png'
import gitlogo from '../elements/gitlogo.png'
import youtubelogo from '../elements/youtube.png'
import linkedinLogo from '../elements/linklogo.png'
import facebookLogo from '../elements/facebook.png'
import './Form.css'

function Contact() {


  const initialState = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }

  const [formState, setFormState] = useState(initialState)

  const handleChange = (event) => {
    event.preventDefault()
    setFormState({ ...formState, [event.target.id]: event.target.value })
    if (event.target.value === '') {
      setFormState({ ...formState, [event.target.id]: 0 })
    }
  }

  const handleMessage = (e) => {
    e.preventDefault()
    emailjs
      .send(
        'service_dabri2d',
        'template_0fa62kt',
        formState,
        '-g6CgSoAgcOI1wfb6'
      )
      .then(
        function (response) {
          alert(
            `${formState.name}, Thank you for reaching out! I will respond shortly!`
          )
        },
        function (error) {
          alert('Sorry!', error)
        }
      )
    setFormState(initialState)
  }

  return (
    <div className="contact_card">
      <h3 className='contact_header'>Send me a message here.</h3>
      <div className='contact_form'>
      <div id="contact-form">
       <form onSubmit={handleMessage} method="post" action="/">
      <div>
          <label for="name">
            <span className="required">Name:</span> 
            <input onChange={handleChange} type="text" id="name" name="name" value={formState.name} placeholder="Your Name" required="required" tabindex="1" />
          </label> 
      </div>
      <div>
          <label for="email">
            <span className="required">Email:</span>
            <input onChange={handleChange} type="email" id="email" name="email" value={formState.email} placeholder="Your Email" tabindex="2" required="required" />
          </label>  
      </div>
      <div>             
          <label for="subject">
          <span className="required">I am contacting you because...</span>
            <select onChange={handleChange} id="subject" name="subject" tabindex="4">   
              <option value="PROJECT ESTIMATE REQUEST">I need a project estimate!</option> 
              <option value="EMPLOYMENT OPPORTUNITY">I am hiring!</option>
              <option value="GENERAL MESSAGE">I want to say, "Hi!"</option>
            </select>
          </label>
      </div>
      <div>             
          <label for="message">
            <span className="required">Message:</span> 
            <textarea onChange={handleChange} id="message" name="message" placeholder="Please write your message here." tabindex="5" required="required" value={formState.message}></textarea> 
          </label>  
      </div>
      <div>              
        <button onClick='handleMessage()' name="submit" type="submit" id="submit" >SEND</button> 
      </div>
      </form>
  </div> 
      </div>
      <h3 className='contact_header'>Or find me on any of these platforms.</h3>
      <div className='socials_container'>
      <span data-tooltip="joshua.langner.dev@gmail.com" data-flow="bottom"><a href='mailto: joshua.langner.dev@gmail.com'><img src={emailLogo} alt="email link logo" className='social_icon'/></a></span>
      <div className="btn btn-primary tooltip"><a href='https://www.linkedin.com/in/josh-langner/'><img src={linkedinLogo} alt="linked in link logo" className='social_icon'/></a>
        <div className="top">
          {/* <h3>LinkedIn</h3>
          <p>@josh-langner</p>
          <i></i> */}
        </div>
      </div>
      <div className="btn btn-primary tooltip"><a href='https://www.youtube.com/channel/UCQGVw18qWx3C6A3o0h7lspA'><img src={youtubelogo} alt="you tube link logo" className='social_icon'/></a>
        <div className="top">
          {/* <h3>YouTube</h3>
          <p>@Yeshua0687</p>
          <i></i> */}
        </div>
      </div>
      <div className="btn btn-primary tooltip"><a href='https://github.com/jlangner87'><img src={gitlogo} alt="git hub link logo" className='social_icon'/></a> 
        <div className="top">
          {/* <h3>GitHub</h3>
          <p>@jlangner87</p>
          <i></i> */}
        </div>
      </div> 
      
      <div class="btn btn-primary tooltip">
        <a href='https://www.facebook.com/jlangner87'>
          <img src={facebookLogo} alt="git hub link logo" className='social_icon'/>
        </a>
          <div class="top">
            {/* <h3>Facebook</h3>
            <p>@Joshua-Langner-Webdev</p>
            <i></i> */}
          </div>
      </div>

      </div>
    </div>
  )
}

export default Contact