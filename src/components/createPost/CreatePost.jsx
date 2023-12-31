import "./createPost.css";
import React, { useState, useEffect } from "react";

const CreatePostComponent = ({ users, onPostSubmit }) => {
  // State to store the list of users and form inputs
  const [inputs, setInputs] = useState({
    userId: "",
    title: "",
    content: "",
  });

  // Effect to populate the select element with user options (ta bort)
  useEffect(() => {
    const select = document.getElementById("user-select");
    users.forEach((user) => {
      const option = document.createElement("option");
      option.value = user.id;
      option.text = user.username;
      select.appendChild(option);
    });
  }, [users]);

  // Handler for input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
  };

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form inputs
    if (!inputs.userId || !inputs.title || !inputs.content) {
      console.error("Please fill out all fields.");
      return;
    }

    const selectedUser = users.find(
      (user) => user.id === parseInt(inputs.userId)
    );

    if (!selectedUser) {
      console.error("Invalid user selected.");
      return;
    }

    // Create a new post object
    const newPost = {
      title: inputs.title,
      userId: parseInt(inputs.userId),
      body: inputs.content,
      tags: [],
      reactions: 0,
      id: Date.now(),
    };

    // Send the new post data to the parent component
    onPostSubmit(newPost);

    // Reset form fields after submission
    setInputs({
      userId: "",
      title: "",
      content: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          {/* Dropdown menu to select a user */}
          <select
            id="user-select"
            name="userId"
            value={inputs.userId}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select a user
            </option>
          </select>
        </div>
        <div>
          {/* Input field for the title */}
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={inputs.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          {/* Textarea for post content */}
          <textarea
            name="content"
            placeholder="Post content"
            value={inputs.content}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePostComponent;
