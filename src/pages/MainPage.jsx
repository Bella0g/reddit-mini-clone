import React from 'react'
import Header from '../components/header/Header';
import { CreatePostForm } from '../components/create_post/createPost';
import Posts from "../components/posts/Posts"

export default function MainPage() {
  return (
    <>
    <Header />
    <CreatePostForm/>
    <Posts/>
    </>
  )
}
