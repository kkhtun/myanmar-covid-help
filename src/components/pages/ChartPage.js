import React, { useContext } from "react";
import Loading from "../../assets/images/Loading.gif";
import { ChartContext } from "../context/ApiContext";

// Import Charts
import Chart from "../charts/Chart";

const ChartPage = () => {
  const { isLoading, chartData } = useContext(ChartContext);
  return (
    <>
      {isLoading && (
        <img src={Loading} alt="Fetching Data..." className="loading" />
      )}

      {chartData && !isLoading && (
        <div className="charts">
          <Chart
            label="Cases for last 30 days"
            rgbString="rgba(245, 229, 27, 0.8)"
            chartData={chartData.timeline.cases}
          />
          <Chart
            label="Deaths for last 30 days"
            rgbString="rgba(234, 83, 42, 0.8)"
            chartData={chartData.timeline.deaths}
          />
          <Chart
            label="Recovered for last 30 days"
            rgbString="rgba(46,204,113,0.8)"
            chartData={chartData.timeline.recovered}
          />
        </div>
      )}
    </>
  );
};

export default ChartPage;
