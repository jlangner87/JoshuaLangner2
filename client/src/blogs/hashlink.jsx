import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

function Blog1() {
  return (
    <div className="page">
      <Helmet>
        <title>Joshua Langner WebDev | Blog Title Here </title>
      </Helmet>
      <h1>This is a blog page</h1>
      <h2>???</h2>
    </div>
  )
}

export default Blog1