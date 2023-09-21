import React from 'react'


const DropDown = () => {
  return (
    <details role="list">
      <summary aria-haspopup="listbox">More</summary>
      <ul role="listbox">
        <li><a href="./">Action</a></li>
        <li><a href="./">Another action</a></li>
        <li><a href="./">Something else here</a></li>
      </ul>
    </details>
  );
};

export default DropDown

