import React from 'react';

const Header = ({ time }) => (
  <header className="header">
    <div className="logo">
      <img src="/images/icons/logo.png" alt="Company logo" />  {/* Updated path */}
    </div>
    <div className="clock">{time}</div>
  </header>
);

export default Header;