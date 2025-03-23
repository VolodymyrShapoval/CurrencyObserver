import React from 'react';
import RecommendedUser from './RecommendedUser';

const Recommendations = () => {
  const users = [
    {
      name: 'Vitaliy Hriss',
      imgSrc: 'https://i.pinimg.com/474x/09/c7/a8/09c7a880269df8624f88418fbca07c55.jpg',
    },
    {
      name: 'Viktor Komissarov',
      imgSrc: 'https://media.themoviedb.org/t/p/w500/82HGQmCKnvtGllKfomZ0TuOQEFp.jpg',
    },
    {
      name: 'Oleh Sumaka',
      imgSrc: 'https://cdn.britannica.com/96/173696-050-7070A29D/Benedict-Cumberbatch-British-stage-screen.jpg',
    },
    {
      name: 'Yevhen Nevgad',
      imgSrc: 'https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/256e3021-b4bc-43cb-9d8c-0790d7bbc67c/220x330',
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
