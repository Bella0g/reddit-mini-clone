import React from "react";
import { useParams } from "react-router-dom";
import { BiCommentDots } from "react-icons/bi";
import { ButtonComponent } from "../posts/posts";
import { BsPlusLg } from "react-icons/bs";
import "./PostDetails.css";

function PostDetails({ posts, setPosts, comments }) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);
  const comment = comments.find((comment) => comment.id.toString() === postId);

  const addReactions = (post) => {
    if (post) {
      const updatedPost = { ...post, reactions: post.reactions + 1 };

      const postIndex = posts.findIndex((p) => p.id === post.id);

      const updatedPosts = [...posts];
      updatedPosts[postIndex] = updatedPost;

      setPosts(updatedPosts);
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  } else if (!comment) {
    return <div>Comment not found</div>;
  }

  return (
    <>
      {console.log(comment)}
      {console.log(posts)}
      <div className="post-grid">
        <article className="article-container">
          <span className="article-top">
            <p className="post-user-name">Created by: User {post.userId}</p>
            <div className="container-ul-tags">
              <ul className="ul-tags">
                {post.tags.map((tag) => (
                  <li className="li-posts" key={tag}>
                    #{tag}
                  </li>
                ))}
              </ul>
            </div>
          </span>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <span className="reaction">
            <ButtonComponent
              reactions={post.reactions}
              onClick={() => addReactions(post)}
            />
          </span>
        </article>
        <div className="comment-container">
          <button className="comment-button">
            <BsPlusLg />
            Add a Comment
          </button>
          <article className="comment-article">
            <ul className="comments-list">
              <li>
                <p className="post-user-name">
                  {"Created by: User" + comment.user.username}
                </p>
                <p className="comment-body">{comment.body}</p>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
