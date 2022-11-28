import emailjs from 'emailjs-com'
import { useState } from 'react'

function Contact() {
  return (
    <div className="contact_card">
      <div className='page_content'>
      <h1 className='page_content_header'>Conect with Me</h1>
      </div>
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
    </div>
  )
}

export default Contact