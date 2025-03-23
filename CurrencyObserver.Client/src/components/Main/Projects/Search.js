import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="searching-input">
      <input
        id="search-project-field"
        placeholder="Search:"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button id="search-btn" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
