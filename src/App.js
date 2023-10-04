import './App.css';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from "./components/header/Header"
import CreatePostForm from "./components/createPost/CreatePost"
import PostDetails from "./components/postDetails/PostDetails"
import Posts from "./components/posts/Posts"

// use routing to change between main page an post details?

function App() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error('Error fetching posts:', error));

    fetch('https://dummyjson.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  return (
    <Router>
      <Header posts={posts} />
      <CreatePostForm users={users} />
      <Routes>
        <Route path="/posts/:postId" element={<PostDetails posts={posts} />} />
        <Route path="/" element={<Posts posts={posts} />} />
      </Routes>
    </Router>
  );
}

export default App;
