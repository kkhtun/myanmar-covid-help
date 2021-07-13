import React from "react";
import AdditionalCard from "./cards/AdditionalCard";
const AdditionalStats = ({ data }) => {
  const {
    active,
    tests,
    casesPerOneMillion,
    deathsPerOneMillion,
    testsPerOneMillion,
    oneCasePerPeople,
    oneDeathPerPeople,
    oneTestPerPeople,
    activePerOneMillion,
    recoveredPerOneMillion,
  } = data;
  return (
    <div className="additional">
      <h2>Additional Stats</h2>
      <div className="additional-stats">
        <AdditionalCard title="Active Cases" numberData={active} />
        <AdditionalCard title="Tests" numberData={tests} />
        <AdditionalCard
          title="Cases per one million"
          numberData={casesPerOneMillion}
        />
        <AdditionalCard
          title="Deaths per one million"
          numberData={deathsPerOneMillion}
        />
        <AdditionalCard
          title="Tests per one million"
          numberData={testsPerOneMillion}
        />
        <AdditionalCard
          title="One Case per people"
          numberData={oneCasePerPeople}
        />
        <AdditionalCard
          title="One Death per people"
          numberData={oneDeathPerPeople}
        />
        <AdditionalCard
          title="One Test per people"
          numberData={oneTestPerPeople}
        />
        <AdditionalCard
          title="Active per one million"
          numberData={activePerOneMillion}
        />
        <AdditionalCard
          title="Recovered per one million"
          numberData={recoveredPerOneMillion}
        />
      </div>
    </div>
  );
};

export default AdditionalStats;
