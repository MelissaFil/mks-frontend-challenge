import React from 'react';
import './Header.css';

const Header: React.FC = () => (
  <header className="header">
    <div className="logo">
      MKS <span className="sistemas">Sistemas</span>
    </div>
    <div className="cart-icon">
      <img src="cart-icon.png" alt="Cart" />
      <span>0</span>
    </div>
  </header>
);

export default Header;
