// PieChartComponent.jsx
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartComponent = ({ onHide }) => {
  const data = {
    labels: ["Category A", "Category B", "Category C"],
    datasets: [
      {
        data: [40, 30, 30],
        backgroundColor: ["#f6c423", "#3b82f6", "#10b981"],
        hoverBackgroundColor: ["#f3b100", "#3b75e6", "#0a9e6b"],
      },
    ],
  };

  return (
    <div className="piechart-container">
      <h3>Pie Chart</h3>
      <Pie data={data} />
      <button className="pie-chart-button" onClick={onHide}>
        Hide Pie Chart
      </button>
    </div>
  );
};

export default PieChartComponent;
