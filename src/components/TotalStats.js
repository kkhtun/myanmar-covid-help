import React from "react";
import TotalCard from "./cards/TotalCard";
const TotalStats = ({ data }) => {
  const { cases, deaths, recovered } = data;
  return (
    <div className="total">
      <h2>Total Stats</h2>
      <div className="total-stats">
        <TotalCard title="Cases" numberData={cases} />
        <TotalCard title="Deaths" numberData={deaths} />
        <TotalCard title="Recovered" numberData={recovered} />
      </div>
    </div>
  );
};

export default TotalStats;
