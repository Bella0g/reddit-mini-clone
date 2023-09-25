// Comments component: This component will display all the comments for a post.
// It will show the content of the comment and the name of the creator (user).

import { useEffect, useState } from "react";
import "./comments.css"

function Coments() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    getComment();
  }, []);

  const getComment = async () => {
    const api = await fetch("https://dummyjson.com/comments");
    const commentData = await api.json();
    console.log(commentData);
    setComment(commentData.comments);
  };
  return (
    <>
      {comment.map((comment) => {
        return (
          <>
            <ul className="comments-ul" key={comment.id}>
              <p>{comment.body}</p>
              <p>created by: {comment.user.username}</p>
            </ul>
          </>
        );
      })}
    </>
  );
}

export default Coments;
