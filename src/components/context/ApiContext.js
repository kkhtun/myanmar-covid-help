import React, { useState, createContext, useEffect } from "react";

export const ApiContext = createContext();

export const ApiContextProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://disease.sh/v3/covid-19/countries/myanmar?yesterday=yesterday&twoDaysAgo=twoDaysAgo&strict=true"
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <ApiContext.Provider value={{ data, isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};
