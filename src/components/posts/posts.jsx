//  This component will display all the posts on the main page.
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import "./Posts.css";
import Coments from "../comments/coments";
import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <article className="article-container" key={post.id}>
          <h3 className="post-title">{post.title}</h3>
          <p>{post.body.slice(0, 60)}...</p>
          <ul className="ul-tags">
            {post.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
          <p className="post-user-name">Created by: User {post.userId}</p>
          <div className="bottom-div">
            <p className="reaction">{post.reactions}</p>
            <Coments />
          </div>
        </article>
      ))}
    </div>
  );
};

export default PostList;
