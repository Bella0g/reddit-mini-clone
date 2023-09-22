//  This component will display all the posts on the main page. 
// It will show the title, a part of the content (max 60 characters), tags, and the name of the creator (user).
import "./Posts.css"
import React, { useEffect, useState } from "react";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://dummyjson.com/posts")
            .then((res) => res.json())
            .then((data) => {
                setPosts(data.posts);
            });
    }, []);

    return (
        <div className="post-grid" >
            {posts.map((post) => (
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body.slice(0, 60)}...</p>
                    <ul>
                        {post.tags.map((tag) => (
                            <li key={tag}>{tag}</li>
                        ))}
                    </ul>
                    <p>Created by: User {post.userId}</p>
                    
                </article>
            ))}
        </div>
    );
};

export default PostList;