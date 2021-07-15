import React from "react";
import { Doughnut, Chart } from "react-chartjs-2";
const TestPopulationChart = ({ cases, deaths, recovered, totalPopulation }) => {
  const affectedPopulation = cases + deaths + recovered;
  const unaffectedPopulation = totalPopulation - affectedPopulation;
  const data = {
    labels: ["Cases", "Deaths", "Recovered", "Unaffected/Undocumented"],
    datasets: [
      {
        data: [cases, deaths, recovered, unaffectedPopulation],
        backgroundColor: [
          "rgba(245, 229, 27, 0.8)",
          "rgba(234, 83, 42, 0.8)",
          "rgba(46,204,113,0.8)",
          "rgba(189, 195, 199, 0.8)",
        ],
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
        text: "Per Total Population",
      },
      subtitle: {
        display: true,
        text: `${((affectedPopulation * 100) / totalPopulation).toFixed(
          2
        )} % of Myanmar's Population documented to be infected by COVID-19`,
      },
    },
    elements: {
      arc: {
        borderWidth: 0,
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
