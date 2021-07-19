import React, { useState, useContext } from "react";
import Loading from "../../assets/images/Loading.gif";

// Service Context Import
import { ServicesContext } from "../context/ServicesContext";
// Child Imports
import ServicesList from "../ServicesList";
import ServicesSearch from "../ServicesSearch";
import ServicesFilterByType from "../ServicesFilterByType";

const ServicesPage = () => {
  const { isLoading, services } = useContext(ServicesContext);

  // useStates for search
  const [searchTerm, setSearchTerm] = useState("");
  const [searchParams] = useState(["name", "township", "type"]);

  // useStates for filter by type
  const [filterTerm, setFilterTerm] = useState("");

  const search = (services) => {
    return services.filter((service) => {
      if (filterTerm && service.type === filterTerm) {
        return searchParams.some((param) => {
          return (
            service[param]
              .toString()
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
          );
        });
      } else if (filterTerm === "") {
        return searchParams.some((param) => {
          return (
            service[param]
              .toString()
              .toLowerCase()
              .indexOf(searchTerm.toLowerCase()) > -1
          );
        });
      }
      return false;
    });
  };

  return (
    <>
      <h2 className="services-heading">
        <span>၀န်ဆောင်မှုများ</span>
        {services && !isLoading && (
          <span>Total Services : {services.length}</span>
        )}
      </h2>
      <div className="search-container">
        <ServicesFilterByType setFilterTerm={setFilterTerm} />
        <ServicesSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}

      {services && !isLoading && <ServicesList services={search(services)} />}
    </>
  );
};

export default ServicesPage;
