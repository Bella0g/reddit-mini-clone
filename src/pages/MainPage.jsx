import React, { useState, useEffect } from "react";
import Header from "../components/header/Header"; 
import CreatePostForm from "../components/createPost/CreatePost"; 
import Posts from "../components/posts/Posts"; 

export default function MainPage() {
  const [fetchedPosts, setFetchedPosts] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setFetchedPosts(data.posts);
      });

    // Fetch users
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.users);
      });
  }, []);

  return (
    <>
      <Header />
      <CreatePostForm users={users} />
      <Posts posts={fetchedPosts} />
    </>
  );
}
