import React from "react";
import Header from "../components/header/header";
import { CreatePostForm } from "../components/create_post/createPost";
import Posts from "../components/posts/posts";
import Coments from "../components/comments/coments";

export default function MainPage() {
  return (
    <>
      <Header />
      <CreatePostForm />
      <Posts />
      <Coments />
    </>
  );
}
