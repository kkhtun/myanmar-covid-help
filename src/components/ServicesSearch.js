import React from "react";
import SearchIcon from "../assets/images/Search.png";
const ServicesSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-item">
      <span className="search-icon">
        <img src={SearchIcon} alt="" />
      </span>
      <input
        type="text"
        name="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
        placeholder="ရှာရန် (eg.မြို့နယ်၊ အောက်ဆီဂျင်)"
      />
    </div>
  );
};

export default ServicesSearch;
