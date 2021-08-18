import React from 'react';
import './style.css';
/**
* @author
* @function Header
**/

const Header = () => {
  return(
    <header className="header">
        <nav className="headerMenu">
            <a href="/">Home</a>
            <a href="/products">Products</a>
        </nav>
        <div>
        <nav className="headerMenu">
          <a href="/login">Login</a>
            <a href="/sign-up">Signup</a>
        </nav>
        </div>
    </header>
   )

 }

export default Header
