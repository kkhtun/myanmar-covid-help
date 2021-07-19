import React, { useState, useEffect, createContext } from "react";

export const ServicesContext = createContext();

export const ServicesContextProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://kkhtun.github.io/mmcovid-data/mmCovid.json")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ServicesContext.Provider value={{ isLoading, services }}>
      {children}
    </ServicesContext.Provider>
  );
};

export const ServiceTypesContext = createContext();

export const ServiceTypesContextProvider = ({ children }) => {
  const [types, setTypes] = useState([]);
  useEffect(() => {
    fetch("https://kkhtun.github.io/mmcovid-data/validation.json")
      .then((res) => res.json())
      .then((data) => {
        setTypes(data);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ServiceTypesContext.Provider value={{ types }}>
      {children}
    </ServiceTypesContext.Provider>
  );
};
