import React, { useState } from "react";
import SearchIcon from "../../assets/images/Search.png";
// Child Imports
import ServicesList from "../ServicesList";

const ServicesPage = () => {
  const [services, setServices] = useState([
    {
      name: "Hello",
      type: "Oxygen",
      address: "Address 1",
      township: "Township 1",
      status: "Available",
      phone: ["132424123", "1234123412"],
    },
    {
      name: "Search Me",
      type: "Teleconsultation",
      address: "Address 2",
      township: "Township 2",
      status: "Waiting",
      phone: ["132424123", "1234123412"],
    },
    {
      name: "The last one",
      type: "Other",
      address:
        "Address 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus quasi labore cumque? Voluptates natus accusantium consequuntur corrupti alias ratione!",
      township:
        "Township 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt necessitatibus quasi labore cumque? Voluptates natus accusantium consequuntur corrupti alias ratione!",
      status: "Available",
      phone: ["132424123", "1234123412"],
    },
    {
      name: "မြန်မာလိုရေးကြည့်တာ",
      type: "ကွန်စင်ထရေတာ",
      address: "လှည်းကူး",
      township: "လှည်းကူး",
      status: "Available",
      phone: ["132424123", "1234123412", "1234123412"],
    },
  ]);

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
      <ServicesList
        services={searchTerm.length < 1 ? services : searchResults}
      />
    </>
  );
};

export default ServicesPage;
