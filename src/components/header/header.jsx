import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img className='logo' src="./Reddit-logo.png" alt="reddit-logo" />
      <div className='headerContainer'>
      <h2>All Subreddits</h2>
      <nav>
        <ul>
          <li><a href="/">HOT</a></li>
          <li><a href="/">NEW</a></li>
          <li><a href="/">CONTROVERSIAL</a></li>
          <li><a href="/">RISING</a></li>
          <li><a href="/">MORE</a></li>
          
        </ul>
      </nav>
      </div>
    </header>
  )
}
