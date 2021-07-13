import React from "react";

const TodayCard = ({ title, numberData }) => {
  return (
    <article className="today-card">
      <div className="today-card-inner-wrapper">
        <h2>Today {title}</h2>
        <pre>{numberData}</pre>
      </div>
    </article>
  );
};

export default TodayCard;
