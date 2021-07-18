import React, { useState, useContext } from "react";
import Loading from "../../assets/images/Loading.gif";

// Service Context Import
import { ServicesContext } from "../context/ServicesContext";
// Child Imports
import ServicesList from "../ServicesList";
import ServicesSearch from "../ServicesSearch";
// import ServicesFilterByType from "../ServicesFilterByType";

const ServicesPage = () => {
  const { isLoading, services } = useContext(ServicesContext);

  // for filter by type states
  // const [onFilter, setOnFilter] = useState(false);
  // const [filterTerm, setFilterTerm] = useState("");
  // const [filterdResults, setFilteredResults] = useState(services);

  // const handleFilterByType = (e) => {
  //   setFilterTerm(e.target.value);
  //   if (filterTerm === "") {
  //     setFilteredResults(services);
  //   } else {
  //     const filteredList = services.filter(
  //       (service) => service.type === filterTerm
  //     );
  //     console.log(filteredList);
  //     setFilteredResults(filteredList);
  //   }
  // };

  // useStates for search
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
        {/* <ServicesFilterByType
        // handleFilterByType={handleFilterByType}
        // filterTerm={filterTerm}
        /> */}
        <ServicesSearch searchTerm={searchTerm} handleSearch={handleSearch} />
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
