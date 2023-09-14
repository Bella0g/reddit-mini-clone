// Create post component: This component will allow users to create a new post. 
// Users will be able to select the user who will create the post from the available users in the API.
//  The component will call the API to create a new post.

import { useState } from "react";

export function CreatePostForm() {
  const [inputs, setInputs] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setResult(inputs);
  };

  return (
    <>
      {result !== null ? (
        <>
          <div>{JSON.stringify(result)}</div>
          <br />
        </>
      ) : null}
      <form onSubmit={handleSubmit}>
        <label>
          Enter your username:
          <input
            type="text"
            name="username"
            value={inputs.username || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter post title:
          <input
            type="text"
            name="title"
            value={inputs.title || ""}
            onChange={handleChange}
          />
        </label>
        <label>
          Enter post content:
          <textarea
            name="content"
            value={inputs.content || ""}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Create Post" />
      </form>
    </>
  );
}
