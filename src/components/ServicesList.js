import React from "react";
import { Link } from "react-router-dom";

const ServicesList = ({ services }) => {
  return (
    <div className="services-container">
      {services &&
        services.map((service, index) => (
          <div className="service-item" key={index}>
            <Link
              className="service-item-link"
              to={{
                pathname: "/service-item",
                state: service,
              }}
            >
              <div className="service-item-inner">
                <h2 className="service-name">{service.name}</h2>
                <p className="service-type">{service.type}</p>
                <p className="service-township">&#x1F4CD; {service.township}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ServicesList;
