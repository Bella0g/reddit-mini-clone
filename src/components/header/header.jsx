import React from 'react'
import "./Header.css"

export default function Header() {
  return (
    <header>
      <img className='logo' src="./Reddit-logo.png" alt="reddit-logo" />
      <div>
      <h2>All Subreddits</h2>
      <nav>
        <ul>
          <li><a href="/">Hot</a></li>
          <li><a href="/about">New</a></li>
          <li><a href="/contact">Controversial</a></li>
        </ul>
      </nav>
      </div>
    </header>
  )
}
