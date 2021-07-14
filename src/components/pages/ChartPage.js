import React, { useContext } from "react";
import { ChartContext } from "../context/ApiContext";

// Import Charts
import Chart from "../charts/Chart";

const ChartPage = () => {
  const { isLoading, chartData } = useContext(ChartContext);
  return (
    <div className="charts">
      {chartData && !isLoading && (
        <>
          <Chart
            label="Cases"
            rgbString="rgba(245, 229, 27, 0.8)"
            chartData={chartData.timeline.cases}
          />
          <Chart
            label="Deaths"
            rgbString="rgba(234, 83, 42, 0.8)"
            chartData={chartData.timeline.deaths}
          />
          <Chart
            label="Recovered"
            rgbString="rgba(46,204,113,0.8)"
            chartData={chartData.timeline.recovered}
          />
        </>
      )}
    </div>
  );
};

export default ChartPage;
