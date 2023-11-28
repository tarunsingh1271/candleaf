
import React from 'react'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css';




const Navbar = () => {

  return (
    <nav className="navbar">   

      <Link className="navbar-brand" href="/">Candleaf</Link>

      <button className="navbar" type="button"></button>

      
          <Link className="nav-link active" href="/">Discovery</Link>
      
          <Link className="nav-link" href="/about">About</Link>

          <Link className="nav-link" href="/contactus">Contact Us</Link>      

    </nav>
    
  )
}



export default Navbar
