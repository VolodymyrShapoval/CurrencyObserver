import React from 'react';
import ProjectsStatistic from './ProjectStatistic';
import ScienceStatistic from './ScienceStatistic';
import YearsStatistic from './YearsStatistic';

const WorkStatistics = () => (
    <div className="work-statistics">
      <ProjectsStatistic />
      <ScienceStatistic />
      <YearsStatistic />
    </div>
  );
  
export default WorkStatistics;