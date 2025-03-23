import React from "react";

const TableHeader = () => (
    <thead>
      <tr>
        <th rowSpan="2">Title</th>
        <th colSpan="4">Info</th>
      </tr>
      <tr>
        <th data-type="date">Date</th>
        <th data-type="number">Rate</th>
        <th>Country</th>
        <th>About</th>
      </tr>
    </thead>
  );

export default TableHeader;