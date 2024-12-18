import React from "react";
import "./index.css";

const Search = ({ recepts, setrecepts }) => {


  const changeEvent = (e) => {
    e.preventDefault();
    const searchParam = e.target.value.trim().toLowerCase();

    if (searchParam === "") {
      setrecepts(recepts);
    } else {
      const filteredProducts = recepts.filter((item) => item.name.toLowerCase().includes(searchParam));
      setrecepts(filteredProducts);
    }

  }
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
            onChange={changeEvent}

          />
        </div>
      </form>
    </div>
  );
};

export default Search;
