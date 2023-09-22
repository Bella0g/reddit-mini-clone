//  This component will display all the posts on the main page. 
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import React, { useState, useEffect } from "react";
import Card from "../card/Card";
import "./Posts.css";

export default function Posts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
            })
            .catch((error) => {
                console.error("Error fetching posts:", error);
            });
    }, []);

    return (
        <div className="container">
            {posts.length > 0 ? (
                posts.map((post) => <Card key={post.id} post={post} />)
            ) : (
                <p>Loading posts...</p>
            )}
        </div>
    );
}