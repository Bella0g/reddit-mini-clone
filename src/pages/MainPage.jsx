import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import Posts from "../components/posts/Posts";

export default function MainPage() {
  const [fetchedPosts, setFetchedPosts] = useState([]);

  useEffect(() => {
    // Fetch posts
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        setFetchedPosts(data.posts);
      });

  }, []);

  return (
    <>
      <Header />
      <Posts posts={fetchedPosts} />
    </>
  );
}