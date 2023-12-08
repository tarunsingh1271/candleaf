import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

const Nav = () => {
  return (
    <header>
    <div className="bg-white flex justify-center  pt-4 px-20">

  <div className="flex flex-row justify-between mt-0 w-4/5">
    <div className="flex flex-row gap-2 w-1/6 items-start">
    <img src="https://file.rendit.io/n/8kLE8Me7RdrZn6GBUXyI.svg" alt="Icon" id="Icon" className="w-8" />
        <Link className="navbar-brand" href="/" >      
          <img src="https://file.rendit.io/n/7Om2xNJgpQZ0Ab64qvkZ.svg" alt="Wordmark" id="Wordmark" className="mt-2 w-20" />
        </Link>
    </div>

    <div className="flex mt-1 w-1/2 items-start">

      <div className="flex items-center jutify-center gap-10 w-1/2 items-start">

        <div className="flex gap-1 w-24 items-start">

        <Link className="nav-link active" href="/">Discovery</Link>
          <img src="https://file.rendit.io/n/nhEpTHGtCMFXPSR3WTqZ.svg" alt="ChevronDown" id="ChevronDown" className="mt-2 w-2" />
        </div>
        <Link className="nav-link active" href="/about">About</Link>
        <Link className="nav-link active" href="/contact">Contact us</Link>
      </div>
    </div>
  </div>
  <div className="flex flex-row gap-20 w-20 items-start">
    
    <img className="w-8"  src="https://file.rendit.io/n/jrZ7YjabcrXGAudCE0Xm.svg" alt="profile" id="profile" />    

    <img className="mt-1 w-6" src="https://file.rendit.io/n/ZusQVoXWC9muoceL7MOL.svg" alt="Cart" id="Cart" />
    
  </div>
</div>
</header>
)
}

export default Nav
