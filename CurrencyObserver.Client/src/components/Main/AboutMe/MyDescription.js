import React from 'react';

const MyDescription = () => (
    <div className="my-description" id="my-description">
      <ul>
        <li id="age">
          <span>Age: </span>
        </li>
        <li id="gender">
          <span>Gender: </span>
        </li>
        <li id="language">
          <span>Language: </span>
        </li>
        <li id="work">
          <span>Work: </span>
        </li>
        <li id="status">
          <span>Status: </span>
        </li>
      </ul>
      <button>Download CV</button>
    </div>
  );
  
export default MyDescription;