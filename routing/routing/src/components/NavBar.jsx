import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar'>      
    <Link to="/" className="nav-link">Home</Link>
      <Link to="/cart" className="nav-link">Cart</Link>
      <Link to="/user" className="nav-link">User</Link>
    </div>
  )
}

export default NavBar