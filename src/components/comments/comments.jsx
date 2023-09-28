import { useEffect, useState } from "react"

function Comments() {
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const api = await fetch("https://dummyjson.com/comments");
    const commentData = await api.json();
    console.log(commentData);
    setComments(commentData.comments);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  return (
    <>
      <div className="show-comments">
  
          {showComments ? "Hide" : "Show Comments"}
  </button>*/}
      </div>
      {showComments && (
        <div>
          {comments.map((comment) => {
            return (
              <ul className="comments-ul" key={comment.id}>
                <p className="comment">{comment.body}</p>
                <p className="comment-user-name">
                  Created by: {comment.user.username}
                </p>
              </ul>
            );
          })}
        </div>
      )}
    </>
  );
}

export default Comments;
