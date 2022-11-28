import { NavLink } from 'react-router-dom'
import header from '../elements/me_header.png'
import home from '../elements/home_icon.png'

function AboutMe() {
  return (
    <div className="page">
      <img src={header} alt="headshot and title Joshua Langner Software engineer" className='header_logo' />
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
    </div>
  )
}

export default AboutMe