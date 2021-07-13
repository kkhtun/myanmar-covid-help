import React from "react";

const TotalCard = ({ title, numberData }) => {
  return (
    <article className="total-card">
      <div className="total-card-inner-wrapper">
        <h2>Total {title}</h2>
        <pre>{numberData}</pre>
      </div>
    </article>
  );
};

export default TotalCard;
