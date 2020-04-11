import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/logo.svg';

import "./header.styles.scss";

const Header = () => {
  return (
    <div className='header'>
      <Link className="logo-container" to="/">
        <Logo />
      </Link>

      <div className="options">
          <Link className="option" to="/shop">Shop</Link>
          <Link className="option" to="/shop">Contact Us</Link>
      </div>
    </div>

  );
}


export default Header;