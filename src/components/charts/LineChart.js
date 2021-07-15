import React from "react";
import { Line, Chart } from "react-chartjs-2";
import { formatDays, formatData } from "../helpers/ChartHelper";
const LineChart = ({ label, chartData, rgbString }) => {
  // Can be run only once for days
  const formattedDays = formatDays(chartData);

  const formattedCases = formatData(chartData);
  const data = {
    labels: formattedDays,
    datasets: [
      {
        label: label,
        data: formattedCases,
        color: "#BCBEC8",
        borderColor: [rgbString],
        backgroundColor: [rgbString],
        pointBackgroundColor: rgbString,
        pointBorderColor: rgbString,
      },
    ],
  };

  // Change default font color options
  Chart.defaults.color = "azure";
  const options = {
    maintainAspectRatio: false,
  };
  return (
    <div className="single-chart">
      <div className="wrapper">
        <Line data={data} options={options} />
      </div>
    </div>
  );
};

export default LineChart;
