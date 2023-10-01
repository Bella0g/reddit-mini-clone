import React, { useState, useEffect } from 'react';
import PostList from '../posts/Posts';
import "./Header.css"

// Fix so that the correct post are shown when clicking a topic in the header
// fix so that the create post component never disappears when new topic is clicked
const topics = ['fiction', 'mystery', 'history', 'crime', 'love'];

export default function Header() {
  const [categorizedPosts, setCategorizedPosts] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        const categorized = {};
        topics.forEach((topic) => {
          categorized[topic] = data.posts.filter((post) =>
            post.tags.includes(topic)
          );
        });
        setCategorizedPosts(categorized);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  const handleTopicClick = (topic) => {
    // Set the selected category
    setSelectedCategory(topic);
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
                <button className='header-button' onClick={() => handleTopicClick(topic)}>
                  {topic.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <div>
        {/* Display the categorized posts */}
        {selectedCategory && (
          <div>
            <PostList posts={categorizedPosts[selectedCategory]} />
          </div>
        )}
      </div>

    </div>
  )
};