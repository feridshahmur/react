import React from "react";
import "./index.css";

const Search = () => {
  

  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="searchInput" className="form-label">
            Search at Menu
          </label>
          <input
            type="text"
            className="form-control"
            id="searchInput"
            placeholder="Search for a recipe..."
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
