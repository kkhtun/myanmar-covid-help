import React from "react";
import CountUp from "react-countup";
const AdditionalCard = ({ title, numberData }) => {
  return (
    <article className="additional-card">
      <div className="additional-card-inner-wrapper">
        <h2>{title}</h2>
        <pre>
          <CountUp end={numberData} duration={5} delay={1} />
        </pre>
      </div>
    </article>
  );
};

export default AdditionalCard;
