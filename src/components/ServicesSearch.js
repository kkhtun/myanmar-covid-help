import React from "react";
import SearchIcon from "../assets/images/Search.png";
const ServicesSearch = ({ searchTerm, handleSearch }) => {
  return (
    <div className="search-item">
      <span className="search-icon">
        <img src={SearchIcon} alt="" />
      </span>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
        placeholder="ရှာဖွေရန်..."
      />
    </div>
  );
};

export default ServicesSearch;
