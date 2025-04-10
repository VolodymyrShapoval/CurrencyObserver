import React from 'react';

const Logo = () => (
  <div className="logo">
    <a href="/">
      <img src={`${process.env.PUBLIC_URL}/assets/images/tools-and-utensils-programmer-svgrepo-com.svg`} alt="logo" />
    </a>
  </div>
);

export default Logo;
