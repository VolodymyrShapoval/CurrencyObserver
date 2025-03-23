import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";

const ProjectsTable = ({ projects }) => (
  <table id="projects_table">
    <TableHeader />
    <TableBody projects={projects} />
  </table>
);

export default ProjectsTable;
