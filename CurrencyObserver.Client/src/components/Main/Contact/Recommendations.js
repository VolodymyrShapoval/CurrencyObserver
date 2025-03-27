import React from 'react';
import RecommendedUser from './RecommendedUser';

const Recommendations = () => {
  const users = [
    {
      name: 'Volodymyr Shapoval',
      imgSrc: '/assets/images/tom-cruise-young.jpeg.webp',
    },
    {
      name: 'Viktor Komissarov',
      imgSrc: 'https://media.themoviedb.org/t/p/w500/82HGQmCKnvtGllKfomZ0TuOQEFp.jpg',
    },
  ];

  return (
    <aside className="recommendations">
      {users.map((user, index) => (
        <RecommendedUser key={index} name={user.name} imgSrc={user.imgSrc} />
      ))}
    </aside>
  );
};

export default Recommendations;
