import React from 'react';
import Introduction from './Introduction/Introduction';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const MainPage = () => (
  <main className="main-page" id="main-page">
    <Introduction />
    <Blog />
    <Contact />
  </main>
);

export default MainPage;
