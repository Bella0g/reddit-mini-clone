import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonComponent } from "../posts/posts";
import { BsPlusLg } from "react-icons/bs";
import "./PostDetails.css";

function PostDetails({ posts, setPosts, comments, users }) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);

  const [showCreateComment, setShowCreateComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    const specificComment = comments.find(
      (comment) => comment.id.toString() === postId
    );

    const userCreatedCommentsKey = `user_comments_post_${postId}`;
    const userCreatedComments = JSON.parse(
      localStorage.getItem(userCreatedCommentsKey) || "[]"
    );

    const combinedComments = specificComment
      ? [specificComment, ...userCreatedComments]
      : userCreatedComments;

    combinedComments.sort((a, b) => a.id - b.id);

    setCommentsState(combinedComments);
  }, [comments, postId]);

  const addReactions = (post) => {
    if (post) {
      const updatedPost = { ...post, reactions: post.reactions + 1 };

      const postIndex = posts.findIndex((p) => p.id === post.id);

      const updatedPosts = [...posts];
      updatedPosts[postIndex] = updatedPost;

      setPosts(updatedPosts);
    }
  };

  const handleCommentButtonClick = () => {
    setShowCreateComment(true);
  };

  const handleCommentChange = (event) => {
    setCommentText(event.target.value);
  };

  const handleAddComment = () => {
    if (commentText.trim() !== "" && users.length > 0) {
      const randomUserIndex = Math.floor(Math.random() * users.length);
      const randomUser = users[randomUserIndex];

      const newComment = {
        id: Math.random(),
        postId,
        body: commentText,
        user: {
          username: randomUser.username,
        },
      };

      const userCreatedCommentsKey = `user_comments_post_${postId}`;
      const userCreatedComments = JSON.parse(
        localStorage.getItem(userCreatedCommentsKey) || "[]"
      );

      localStorage.setItem(
        userCreatedCommentsKey,
        JSON.stringify([...userCreatedComments, newComment])
      );

      setCommentsState((prevComments) => [newComment, ...prevComments]);

      setCommentText("");
    } else {
      console.error("No users available to create a comment.");
    }
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  const sortedComments = commentsState.sort((a, b) => a.id - b.id);

  return (
    <>
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
          <button className="comment-button" onClick={handleCommentButtonClick}>
            <BsPlusLg />
            Add a Comment
          </button>
          {showCreateComment && (
            <div className="create-comment">
              <textarea
                className="comment-text"
                rows="2"
                placeholder="Write a new comment..."
                value={commentText}
                onChange={handleCommentChange}
              />
              <button className="add-comment-btn" onClick={handleAddComment}>
                Add Comment
              </button>
            </div>
          )}
          <article className="comment-article">
            <ul className="comments-list">
              {sortedComments.map((comment) => (
                <li key={comment.id}>
                  <p className="post-user-name">
                    {"Created by: User " +
                      (comment.user ? comment.user.username : "Unknown")}
                  </p>
                  <p className="comment-body">{comment.body}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}

export default PostDetails;
