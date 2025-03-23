import React from 'react';
import PersonalInfo from './PersonalInfo';
import WorkStatistics from './WorkStatistics.js';
import MyPhoto from './MyPhoto';

const AboutMe = () => (
  <section className="about-me-page" id="about-me-page">
    <MyPhoto />
    <PersonalInfo />
  </section>
);

export default AboutMe;
