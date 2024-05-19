import React from 'react';
import './navbar.css';

function Navbar() {


  return (
    <nav
      id='navbar'>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <div className="menu-toggle" id="mobile-menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </label>
      <label className="logo">Karthik</label>
      <ul>
        <li><a href="#navbar" >Home</a></li>
        <li><a href="#about" >About</a></li>
        <li><a href="#experience" >Experience</a></li>
        <li><a href="#skills" >Skills</a></li>
        <li><a href="#projects" >Projects</a></li>
        <li><a href="#socials" >Socials</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
