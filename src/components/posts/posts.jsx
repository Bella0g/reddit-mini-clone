//  This component will display all the posts on the main page.
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import "./Posts.css";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";

  const PostList = ({ selectedPosts }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      if (selectedPosts) {
        setPosts(selectedPosts);
      } else {
        fetch("https://dummyjson.com/posts")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setPosts(data.posts);
          });
      }
    }, [selectedPosts]);

    const [countUp, setCountUp] = useState(0)
    const incrementCount = () => {
      setCountUp(countUp + 1);
    }

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
            <button className="thumbs-up" onClick={incrementCount}><FaRegThumbsUp /></button>
            <p className="increment" >{post.reactions + countUp}</p>
          </span>
        </article>
      ))}
    </div>
  );
};

export default PostList;
