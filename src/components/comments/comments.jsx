import React from 'react'

function comments({ comment }) {
  return (
    <div>
      <p>Comment by: {comment.creator}</p>
      <p>{comment.body}</p>
    </div>
  )
}

export default comments
