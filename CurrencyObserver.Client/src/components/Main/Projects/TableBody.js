import React from "react";

const TableBody = ({ projects }) => (
    <tbody>
      {projects.map((project, index) => (
        <tr key={index}>
          <td>{project.title}</td>
          <td>{project.date}</td>
          <td>{project.rate}</td>
          <td>{project.country}</td>
          <td>{project.about}</td>
        </tr>
      ))}
    </tbody>
  );

export default TableBody;