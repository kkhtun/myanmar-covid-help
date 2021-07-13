import React from "react";
import TodayCard from "./cards/TodayCard";
const TodayStats = ({ data }) => {
  const { todayCases, todayDeaths, todayRecovered } = data;
  return (
    <div className="today">
      <h2>Today Stats</h2>
      <div className="today-stats">
        <TodayCard title="Cases" numberData={todayCases} />
        <TodayCard title="Deaths" numberData={todayDeaths} />
        <TodayCard title="Recovered" numberData={todayRecovered} />
      </div>
    </div>
  );
};

export default TodayStats;
