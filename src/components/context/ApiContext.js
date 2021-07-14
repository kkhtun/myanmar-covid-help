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

export const ChartContext = createContext();

export const ChartContextProvider = ({ children }) => {
  const [chartData, setChartData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://disease.sh/v3/covid-19/historical/burma?lastdays=31")
      .then((res) => res.json())
      .then((chartData) => {
        setChartData(chartData);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ChartContext.Provider value={{ chartData, isLoading }}>
      {children}
    </ChartContext.Provider>
  );
};
