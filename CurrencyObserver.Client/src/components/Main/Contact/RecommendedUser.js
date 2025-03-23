import React from 'react';

const RecommendedUser = ({ name, imgSrc }) => {
  return (
    <div className="recommended-user">
      <a href="#">
        <img src={imgSrc} alt={name} />
      </a>
      <h3>{name}</h3>
    </div>
  );
};

export default RecommendedUser;
