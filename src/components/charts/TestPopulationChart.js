import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
const TestPopulationChart = ({ testedPopulation, totalPopulation }) => {
  const data = {
    labels: ["Tested", "Not Tested"],
    datasets: [
      {
        data: [testedPopulation, totalPopulation - testedPopulation],
        backgroundColor: ["rgba(108,128,208, 0.8)", "rgba(247,110,247, 0.8)"],
        hoverBackgroundColor: ["rgba(41,50,79, 0.8)"],
      },
    ],
  };
  // Change default font color options
  Chart.defaults.color = "azure";
  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Tests Per Total Population",
      },
      subtitle: {
        display: true,
        text: `${((testedPopulation / totalPopulation) * 100).toFixed(
          2
        )} % Tested`,
      },
    },
  };
  return (
    <div className="single-chart">
      <div className="wrapper">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default TestPopulationChart;
