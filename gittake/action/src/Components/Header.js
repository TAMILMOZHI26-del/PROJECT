import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="logo.png" alt="Logo" /> {/* Replace with actual logo path */}
      </div>
      <nav>
        <button className="donate-button">Donate Now</button>
        <button className="action-button">Take Action</button>
        <button className="menu-button">Menu</button>
      </nav>
    </header>
  );
};

export default Header;