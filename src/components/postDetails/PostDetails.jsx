import React from "react";
import { useParams } from "react-router-dom";
import { BiCommentDots } from "react-icons/bi";
import { ButtonComponent } from "../posts/posts";

function PostDetails({ posts, setPosts }) {
  const { postId } = useParams();
  const post = posts.find((post) => post.id.toString() === postId);

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
  }

  return (
    <>
      <div className="post-grid">
        <article className="article-container">
          <p className="post-user-name">Created by: User {post.userId}</p>
          <h3 className="post-title">{post.title}</h3>
          <p className="post-body">{post.body}</p>
          <ul className="ul-tags">
            {post.tags.map((tag) => (
              <li className="li-posts" key={tag}>
                #{tag}
              </li>
            ))}
          </ul>
          <span className="reaction">
            <ButtonComponent
              reactions={post.reactions}
              onClick={() => addReactions(post)}
            />
          </span>
        </article>
      </div>
    </>
  );
}

export default PostDetails;
