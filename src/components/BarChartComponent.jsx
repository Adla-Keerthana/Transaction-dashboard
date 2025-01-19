import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  // Example data for the bar chart
  const labels = data ? data.map((item) => item.range) : [];
  const dataValues = data ? data.map((item) => item.count) : [];
  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: "Products Sold",
        data: dataValues, // Replace with actual data
        backgroundColor: "#f6c423",
        borderColor: "#f3b100",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Products Sold by Category",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bar-chart-container">
      <Bar data={barChartData} options={options} />
    </div>
  );
};

export default BarChart;
