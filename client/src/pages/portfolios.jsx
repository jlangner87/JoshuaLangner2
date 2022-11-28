import { NavLink } from 'react-router-dom'
import home from '../elements/home_icon.png'

function Portfolios() {
  return (
    <div className="page">
      <h1>This is the Portfolios page</h1>
      <NavLink to='/'> <img src={home} alt="home icon" className='icon'/> </NavLink>
    </div>
  )
}

export default Portfolios