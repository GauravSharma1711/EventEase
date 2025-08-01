import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
 <div className="navbar bg-base-200 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">EventEase</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     
      <li>
        <details>
          <summary>Access</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><Link to={'/login'} >Login</Link></li>
            <li><Link to={'/signup'}>Signup</Link></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar