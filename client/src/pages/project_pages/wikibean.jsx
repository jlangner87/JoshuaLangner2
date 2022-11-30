import { NavLink } from 'react-router-dom'
import wikibean from './project_images/wikibean.png'

function WikiBean() {
  return (
    <div className="page">
      <img src={wikibean} className='project_splash'/>
    </div>
  )
}

export default WikiBean