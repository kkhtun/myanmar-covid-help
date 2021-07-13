import React from "react";
import CountUp from "react-countup";
const TodayCard = ({ title, numberData }) => {
  return (
    <article className="today-card">
      <div className="today-card-inner-wrapper">
        <h2>Today {title}</h2>
        <pre>
          <CountUp end={numberData} />
        </pre>
      </div>
    </article>
  );
};

export default TodayCard;
