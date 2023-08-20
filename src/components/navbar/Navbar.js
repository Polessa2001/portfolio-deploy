import React, { useState } from 'react';
import logo from '../../assets/logo.svg';
import './Navbar.scss';
import menu from '../../assets/menu.png';
import { useSpring, animated } from '@react-spring/web';

const Navbar = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);


  const showMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };
  const styles = useSpring({
    reset: true,
    from: { opacity: '0' },
    to: { opacity: '1' },
    config: { duration: '600' },
  });
  return (
    <div>
      <img src={menu} className="menu" onClick={showMenu} alt="" />
      <animated.div style={styles}>
        <div className={`navbar ${isMenuVisible ? 'visible' : 'hidden'}`}>
          <div className="links">
            <a href="#section-2">About</a>
            <a href="#section-3">Skills</a>
            <a href="#section-4">Projects</a>
            <a href="#section-5">Contact</a>
          </div>
          <a href="section">
            <img src={logo} alt="logo" />
          </a>
        </div>
        </animated.div>
      <img src={logo} alt="logo" className={`logoMobile ${isMenuVisible ? 'visible' : ''}`} />
    </div>
  );
};

export default Navbar;
