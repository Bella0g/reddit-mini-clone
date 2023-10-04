import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import CreatePostForm from "./components/create_post/createPost";
import PostDetails from "./pages/PostDetails";
import MainPage from "./pages/MainPage";
import Header from "./components/header/header";

// use routing to change between main page an post details?

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/PostDetails/:id" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
