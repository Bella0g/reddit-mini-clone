//  This component will display all the posts on the main page.
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import "./Posts.css";
import React, { useEffect, useState } from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { BiCommentDots } from "react-icons/bi";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";

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
    const [countUp, setCountUp] = useState(0);

    const incrementCount = () => {
      setCountUp(countUp + 1);
    };
    return (
      <>
        <button className="thumbs-up" onClick={incrementCount}>
          <FaRegThumbsUp />
        </button>
        <p className="increment">{countUp}</p>
      </>
    );
  }

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <article className="article-container" key={post.id}>
          <p className="post-user-name">Created by: User {post.userId}</p>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body.slice(0, 60)}...</p>
          <ul className="ul-tags">
            {post.tags.map((tag) => (
              <li className="li-posts" key={tag}>
                #{tag}
              </li>
            ))}
          </ul>
          <span className="reaction">
            <ButtonComponent />
          </span>
          <Link to={"/PostDetails/" + post.id} className="link-item">
            <BiCommentDots />
            <BsChevronCompactDown />
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;