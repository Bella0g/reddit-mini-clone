import React from "react";
import Header from "../components/header/Header";
import CreatePostForm from "../components/createPost/CreatePost";
import Posts from "../components/posts/Posts";

export default function MainPage() {
  return (
    <>
      <Header />
      <CreatePostForm />
      <Posts />
    </>
  );
}
