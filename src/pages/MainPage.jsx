import React from "react";
import Header from "../components/header/header";
import { CreatePostForm } from "../components/create_post/createPost";
import Post from "../components/posts/posts";

export default function MainPage() {
  return (
    <>
      <Header />
      <CreatePostForm />
      <Post />
    </>
  );
}
