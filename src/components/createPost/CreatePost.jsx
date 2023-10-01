// Create post component: This component will allow users to create a new post. 
// Users will be able to select the user who will create the post from the available users in the API.
//  The component will call the API to create a new post.

import { useState } from "react";
import "./createPost.css"

const CreatePostForm = ({ users }) => {
  const [inputs, setInputs] = useState({
    username: "",
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedUser = users.find((user) => user.name === inputs.username);
    if (!selectedUser) {
      console.error("Invalid user selected.");
      return;
    }

    const newPost = {
      title: inputs.title,
      userId: selectedUser.id,
      body: inputs.content,
    };

    // Call the API to add a new post
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("New post added:", data);
        // Optionally, you can update your local state with the new post
        // You can pass a callback function from the parent to handle this
        // onPostCreate(data);
      })
      .catch((error) => console.error("Error adding new post:", error));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          name="username"
          value={inputs.username}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select a user
          </option>
          {users.map((user) => (
            <option key={user.id} value={user.name}>
              {user.name}
            </option>
          ))}
        </select>
        <input
          placeholder="Title"
          type="text"
          name="title"
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Enter post content:"
          name="content"
          value={inputs.content}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreatePostForm;
