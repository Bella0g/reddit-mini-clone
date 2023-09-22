import React from "react";

export default function Card({ post }) {
    const truncatedContent = post.body.slice(0, 60) + "...";

    return (
        <div className="card">
            <h2>{post.title}</h2>
            <p>{truncatedContent}</p>
            <div>Tags: {post.tags}</div>
            <div>Creator: {post.user}</div>
        </div>
    );
}