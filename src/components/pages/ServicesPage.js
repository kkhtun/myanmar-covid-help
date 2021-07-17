import React, { useState, useContext } from "react";
import SearchIcon from "../../assets/images/Search.png";
import Loading from "../../assets/images/Loading.gif";

// Service Context Import
import { ServicesContext } from "../context/ServicesContext";
// Child Imports
import ServicesList from "../ServicesList";

const ServicesPage = () => {
  const { isLoading, services } = useContext(ServicesContext);

  // useState for search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (searchTerm !== "") {
      const searchedServicesList = services.filter((service) => {
        const serviceObj = [service.name, service.township, service.type];
        return serviceObj
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(searchedServicesList);
    } else {
      setSearchResults(services);
    }
  };
  return (
    <>
      <h2 className="services-heading">
        <span>၀န်ဆောင်မှုများ</span>
        {services && !isLoading && (
          <span>၀န်ဆောင်မှုပေါင်း - {services.length} ခု</span>
        )}
      </h2>
      <div className="search-container">
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
      </div>

      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}

      {services && !isLoading && (
        <ServicesList
          services={searchTerm.length < 1 ? services : searchResults}
        />
      )}
    </>
  );
};

export default ServicesPage;
