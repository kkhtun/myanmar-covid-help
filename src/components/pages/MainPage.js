import React, { useState, useEffect } from "react";
import Loading from "../../assets/images/Loading.gif";
import TodayStats from "../TodayStats";
import TotalStats from "../TotalStats";
import AdditionalStats from "../AdditionalStats";
const MainPage = () => {
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
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}
      {data && !isLoading && (
        <>
          <TodayStats data={data} />
          <TotalStats data={data} />
          <AdditionalStats data={data} />
        </>
      )}
    </>
  );
};

export default MainPage;
