import React from 'react'
import DropDown from './DropDown' // Import the DropDown component
import "./Header.css" // Create a separate CSS file for styling

export default function Header() {
  
  return (
    <nav>
      <div className="image-container">
      <img src="./Reddit-logo.png" alt="reddit-logo" />
      </div>
      <div className='header-container'>
        <ul className='header-ul'>
          <li><a href="/">HOT</a></li>
          <li><a href="/">NEW</a></li>
          <li><a href="/">CONTROVERSIAL</a></li>
          <li><a href="/">ENTERTAINMENT</a></li>
             <DropDown/>
        </ul>
      </div>
    </nav >
  )
}
