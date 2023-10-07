import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/header";
import CreatePostForm from "./components/createPost/CreatePost";
import PostDetails from "./components/postDetails/PostDetails";
import Posts from "./components/posts/posts";

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedTag, setSelectedTag] = useState(null);
  const [comments, setComments] = useState([]);

  // Fetch posts
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching posts:", error));

    // Fetch users
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch comments
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data.comments))
      .catch((error) => console.error("Error fetching comments", error));
  }, []);

  let filteredPosts = posts.filter((post) => {
    if (selectedTag === null) {
      return true;
    }

    return post.tags.includes(selectedTag);
  });

  const handlePostSubmit = (newPost) => {
    // Log the new post
    console.log("New post to be added:", newPost);
    // Update the posts state with the new post
    setPosts([newPost, ...posts]);
  };

  return (
    <Router>
      <Header
        posts={posts}
        selectedTag={selectedTag}
        setSelectedTag={setSelectedTag}
      />
      <Routes>
        <Route
          path="/posts/:postId"
          element={
            <>
              <PostDetails
                posts={posts}
                setPosts={setPosts}
                comments={comments}
                setComments={setComments}
                users={users}
              />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <CreatePostForm users={users} onPostSubmit={handlePostSubmit} />
              <Posts
                allPosts={posts}
                posts={filteredPosts}
                setPosts={setPosts}
              />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
