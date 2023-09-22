import React from 'react'
import DropDown from './DropDown'
import "./Header.css"

export default function Header() {
  
  return (
    <nav>
      <img className='logo' src="./Reddit-logo.png" alt="reddit-logo" />
      <div className='headerContainer'>
        <ul>
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
