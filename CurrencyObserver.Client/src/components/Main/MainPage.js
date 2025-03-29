import React from 'react';
import Introduction from './Introduction/Introduction';
import Contact from './Contact/Contact';
import Currencies from './Currencies/Currencies';

const MainPage = () => (
  <main className="main-page" id="main-page">
    <Introduction />
    <Currencies />
    <Contact />
  </main>
);

export default MainPage;
