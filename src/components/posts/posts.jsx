//  This component will display all the posts on the main page.
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import "./Posts.css";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";



const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.posts);
      });
  }, []);

  function ButtonComponent() {
    const [countUp, setCountUp] = useState(0)
  
    const incrementCount = () => {
      setCountUp(countUp + 1);
    }
    return (
      <>
        <button className="thumbs-up" onClick={incrementCount}><FaRegThumbsUp /></button>
        <p className="increment">{countUp}</p>
      </>
    )
  };
  
  return (
    <div className="post-grid">
      {Array.isArray(posts) && posts.map((post) => (
        <article className="article-container" key={post.id}>
          <p className="post-user-name">Created by: User {post.userId}</p>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body.slice(0, 60)}...</p>
          <ul className="ul-tags">
            {post.tags.map((tag) => (
              <li className="li-posts" key={tag}>#{tag}</li>
            ))}
          </ul>
          <span className="reaction">
            <ButtonComponent />
          </span>
        </article>
      ))}
    </div>
  );
};

export default PostList;
