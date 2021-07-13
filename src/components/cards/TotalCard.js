import React from "react";
import CountUp from "react-countup";
const TotalCard = ({ title, numberData }) => {
  return (
    <article className="total-card">
      <div className="total-card-inner-wrapper">
        <h2>Total {title}</h2>
        <pre>
          <CountUp end={numberData} />
        </pre>
      </div>
    </article>
  );
};

export default TotalCard;
