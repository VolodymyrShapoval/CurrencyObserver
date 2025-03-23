import React from 'react';
import TitleAboutMe from './TitleAboutMe';
import MyDescription from './MyDescription';
import WorkStatistics from './WorkStatistics';

const PersonalInfo = () => (
  <div className="info-about-me">
    <TitleAboutMe />
    <div className="details-about-me">
      <MyDescription />
      <WorkStatistics />
    </div>
  </div>
);

export default PersonalInfo;
