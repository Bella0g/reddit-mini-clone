import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = ({ posts, selectedTag, setSelectedTag }) => {
  const tags = [...new Set(posts.map((post) => post.tags).flat())];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <nav>
        <div className="image-container">
          <Link to={"/"}>
            <img src="./Reddit-Logo.png" alt="reddit-logo" />
          </Link>
        </div>
        <div className="header-container">
          <ul className="header-ul">
            {tags.map((tag) => (
              <li key={tag}>
                <button
                  className={`header-button ${
                    selectedTag === tag ? "active" : ""
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag.toUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
