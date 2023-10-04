import React, { useState } from "react";
import PostList from "../posts/posts";
import "./Header.css";
import { useParams } from "react-router-dom";

const topics = ["fiction", "mystery", "history", "crime", "love"];

function Header() {
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
        <div className="header-container">
          <ul className="header-ul">
            {topics.map((topic) => (
              <li key={topic}>
                <a onClick={() => handleTopicClick(topic)}>
                  {topic.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {selectedPosts ? <PostList posts={selectedPosts} /> : <PostList />}
    </div>
  );
}

export default Header;
