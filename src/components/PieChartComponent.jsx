// PieChartComponent.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ data, onHide }) => {
  const pieChartData = {
    labels: data ? data.map((item) => item.category) : [],
    datasets: [
      {
        data: data ? data.map((item) => item.count) : [],
        backgroundColor: [
          "#f6c423",
          "#3b82f6",
          "#10b981",
          "#f59e0b",
          "#f97316",
        ],
        hoverBackgroundColor: ["#f3b100", "#3b75e6", "#0a9e6b"],
      },
    ],
  };

  return (
    <div className="piechart-container">
      <h3>Pie Chart</h3>
      <Pie data={pieChartData} />
      <button className="pie-chart-button" onClick={onHide}>
        Hide Pie Chart
      </button>
    </div>
  );
};

export default PieChartComponent;
