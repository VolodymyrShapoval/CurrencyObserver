import React from 'react';
import Introduction from './Introduction/Introduction';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';

const MainPage = () => (
  <main className="main-page" id="main-page">
    <Introduction />
    <AboutMe />
    <Projects />
    <Blog />
    <Contact />
  </main>
);

export default MainPage;
