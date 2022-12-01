import { NavLink } from 'react-router-dom'
import home from '../elements/home_icon.png'
import header from '../elements/portfolio_header.png'

function Portfolios() {
  return (
    <div className="page">
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
      <img src={header} alt="business website development service" className='header_logo' id='#top'/>
    </div>
  )
}

export default Portfolios