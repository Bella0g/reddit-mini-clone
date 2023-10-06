import "./Posts.css";
import React from "react";
import { FaRegThumbsUp } from "react-icons/fa6";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsChevronCompactDown } from "react-icons/bs";
import { Link } from "react-router-dom";

export function ButtonComponent({ onClick, reactions }) {
  return (
    <>
      <button className="thumbs-up" onClick={onClick}>
        <FaRegThumbsUp />
      </button>
      <p className="increment">{reactions}</p>
    </>
  );
}

const PostList = ({ allPosts, posts, setPosts }) => {
  console.log("Received posts in PostList:", posts);
  const addReactions = (post) => {
    setPosts(
      allPosts.map((all) => {
        if (all !== post) {
          return all;
        } else {
          return { ...post, reactions: post.reactions + 1 };
        }
      })
    );
  };

  return (
    <div className="post-grid">
      {posts.map((post) => (
        <article className="article-container" key={post.id}>
          <Link to={"/posts/" + post.id} className="post-link">
            <span className="article-top">
              <p className="post-user-name">Created by: User {post.userId}</p>
              <ul className="ul-tags">
                {post.tags.map((tag) => (
                  <li className="li-posts" key={tag}>
                    #{tag}
                  </li>
                ))}
              </ul>
            </span>
            <h3 className="post-title">{post.title}</h3>
            <p className="post-body">{post.body.slice(0, 60)}...</p>
          </Link>
          <span className="reaction">
            <ButtonComponent
              reactions={post.reactions}
              onClick={() => addReactions(post)}
            />
          </span>
          <Link to={"/posts/" + post.id}>
            <span className="link-item">
              <FaRegCommentAlt />
              <BsChevronCompactDown />
            </span>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default PostList;
