import React from "react";
import { Link } from "react-router-dom";
const ServiceItemPage = ({ location }) => {
  const service = location.state;
  return (
    <div className="service-item-page">
      <h2 className="service-name">{service.name}</h2>
      <p className="service-type">{service.type}</p>
      <p className="service-township">&#x1F4CD; {service.township}</p>
      <p className="service-address">{service.address}</p>
      <div className="service-phone">
        {service.phone &&
          service.phone.map((ph, index) =>
            ph !== "" ? (
              <a href={`tel:${ph}`} key={index}>
                &#128241; {ph}
              </a>
            ) : (
              ""
            )
          )}
      </div>
      <p className="service-status">
        Current status: Available {/*service.status*/}
      </p>
      <hr /> <br />
      <Link exact to="/" className="nav-link">
        &lt; Back to All Services
      </Link>
    </div>
  );
};

export default ServiceItemPage;
