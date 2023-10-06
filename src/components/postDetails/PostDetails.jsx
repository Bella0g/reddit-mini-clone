import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ButtonComponent } from "../posts/posts";
import { BsPlusLg } from "react-icons/bs";
import "./PostDetails.css";

// Functional component to display post details and comments
function PostDetails({ posts, setPosts, comments, users }) {
  // Retrieve the postId from the URL
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);

  const [showCreateComment, setShowCreateComment] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    // Find the specific comment for the post
    const specificComment = comments.find(
      (comment) => comment.id.toString() === postId
    );

    // Filter and sort comments for the post
    const postComments = comments.filter(
      (comment) => comment.postId === postId
    );
    postComments.sort((a, b) => a.id - b.id);

    // Combine the specific comment and sorted comments
    const allComments = [specificComment, ...postComments];

    // Set the commentsState with the combined comments
    setCommentsState(allComments);
  }, [comments, postId]);

  // Function to add reactions to a post
  const addReactions = (post) => {
    if (post) {
      const updatedPost = { ...post, reactions: post.reactions + 1 };

      const postIndex = posts.findIndex((p) => p.id === post.id);

      const updatedPosts = [...posts];
      updatedPosts[postIndex] = updatedPost;

      // Update the posts with the updated reactions
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
    console.log("Adding a comment");
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

      console.log("New comment:", newComment);

      // Update the comments state with the new comment and existing comments
      setCommentsState((prevComments) => [newComment, ...prevComments]);

      setCommentText(""); // Clear the comment input
    } else {
      console.error("No users available to create a comment.");
    }
  };

  // If post is not found, display a message
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
                    {"Created by: User " + comment.user.username}
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
