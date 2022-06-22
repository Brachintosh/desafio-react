import React from 'react';

const NavBar = () => {
  return (
    <nav>
        <div className='nav-wrapper container'>
          
            <img style={{height:'60px', width:'60px', marginRight:'.5rem'}} src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" />
            <a href="/" className='brand-logo' >Veo-Veo</a>
            <img style={{height:'60px', width:'60px', marginLeft:'8.5rem', transform: 'rotate(90deg)'}} src="https://img.icons8.com/office/80/1A1A1A/starred-ticket.png" className="logo-ticket" alt="logo" />
        </div>
    </nav>
  )
}

export default NavBar;