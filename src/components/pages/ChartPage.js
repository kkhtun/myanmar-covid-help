import React, { useContext } from "react";
import Loading from "../../assets/images/Loading.gif";
import { ChartContext, ApiContext } from "../context/ApiContext";

// Import Charts
import LineChart from "../charts/LineChart";
import TestPopulationChart from "../charts/TestPopulationChart";
import PerPopulationChart from "../charts/PerPopulationChart";

const ChartPage = () => {
  const { isLoading, chartData } = useContext(ChartContext);
  const { data } = useContext(ApiContext);
  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}

      {chartData && !isLoading && (
        <div className="charts">
          <LineChart
            label="Cases for last 30 days"
            rgbString="rgba(245, 229, 27, 0.8)"
            chartData={chartData.timeline.cases}
          />
          <LineChart
            label="Deaths for last 30 days"
            rgbString="rgba(234, 83, 42, 0.8)"
            chartData={chartData.timeline.deaths}
          />
          <LineChart
            label="Recovered for last 30 days"
            rgbString="rgba(46,204,113,0.8)"
            chartData={chartData.timeline.recovered}
          />
          <TestPopulationChart
            testedPopulation={data.tests}
            totalPopulation={data.population}
          />
          <PerPopulationChart
            cases={data.cases}
            deaths={data.deaths}
            recovered={data.recovered}
            totalPopulation={data.population}
          />
        </div>
      )}
    </>
  );
};

export default ChartPage;
