import React, { useContext } from "react";
import Loading from "../../assets/images/Loading.gif";
import TodayStats from "../TodayStats";
import TotalStats from "../TotalStats";
import AdditionalStats from "../AdditionalStats";

import { ApiContext } from "../context/ApiContext";

const MainPage = () => {
  const { data, isLoading } = useContext(ApiContext);
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
