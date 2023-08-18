import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.scss';
import menu from '../../assets/menu.png';
const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(true);
  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  }
  return (
    <div>
      <img src = {menu} className="menu" onClick={showMenu} alt=""/>
      <div className={`${isMenuVisible ? 'navbar' : 'hidden'}`}>
        <div className="links">
          <a href="#section-2">About</a>
          <a href="#section-3">Skills</a>
          <a href="#section-4">Projects</a>
          <a href="#section-5">Contact</a>
        </div>
        <a href="section">
          <img src={logo} alt="logo"/>
        </a>
      </div>
      <img src={logo} alt="logo" className='logoMobile' />
    </div>
  );
};

export default Navbar;
