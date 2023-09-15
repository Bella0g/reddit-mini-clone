import React from 'react'
import './Menu.css';


const DropDown = () => {
  return (
    <div className="dropdown">
      <button type="button" >
    More
  </button>
    <div class="dropdown-menu-container">
  <div className="dropdown-menu">
    <a href="/">
        Home
      </a>
      <a href="/Tech">
        Tech
      </a>
      <a href="/contact">
        Sports
      </a>
      <a href="/src">
        something
      </a>
      <a href="/src">
        something
      </a>
      <a href="/src">
        something
      </a>
  </div>
  </div>
</div>  
  );
};

export default DropDown

