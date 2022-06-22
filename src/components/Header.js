import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/experience'>Experience</Link>
    

    </div>
  )
}

export default Header