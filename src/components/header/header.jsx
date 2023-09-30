import React, { useState } from 'react';
import PostList from '../posts/Posts';
import "./Header.css"

// Fix so that the correct post are shown when clicking a topic in the header
// fix so that the create post component never disappears when new topic is clicked
const topics = ['fiction', 'mystery', 'history', 'crime', 'love'];

// hamta alla och filtrera alla manuellt i koden
export default function Header() {
  const [selectedPosts, setSelectedPosts] = useState(null);

  const handleTopicClick = (topic) => {
    fetch(`https://dummyjson.com/posts/search?q=${topic}`)
      .then((res) => res.json())
      .then((posts) => {
        console.log("Received posts:", posts); // Log the received post data
        setSelectedPosts(posts);
      })
      .catch((error) =>
        console.error(`Error fetching posts for topic ${topic}:`, error)
      );
  };


  return (
    <div>
      <nav>
        <div className="image-container">
          <img src="./Reddit-Logo.png" alt="reddit-logo" />
        </div>
        <div className='header-container'>
          <ul className='header-ul'>
            {topics.map(topic => (
              <li key={topic}>
                <a onClick={() => handleTopicClick(topic)}>
                  {topic.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <PostList selectedPosts={selectedPosts} />
    </div>
  )
};