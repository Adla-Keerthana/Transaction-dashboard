import React, { useState, useEffect } from "react";
import TransactionTable from "./components/TransactionTable";
import StatisticsCards from "./components/StatisticsCards";
import BarChart from "./components/BarChartComponent";
import PieChart from "./components/PieChartComponent";
import api from "./services/api"; // Import the API

const { getTransactions, getStatistics, getBarChartData, getPieChartData } =
  api;

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);
  const [statistics, setStatistics] = useState(null); // For statistics data
  const [barChartData, setBarChartData] = useState(null); // For bar chart data
  const [pieChartData, setPieChartData] = useState(null); // For pie chart data

  // Fetch transactions when component mounts or when the page number changes
  useEffect(() => {
    const fetchTransactionsData = async () => {
      const data = await getTransactions(); // You can adjust the month, year, or other params here
      console.log("Fetched Transactions:", data);
      setTransactions(data.transactions);
    };

    fetchTransactionsData();
  }, [page]);

  // Fetch statistics
  const fetchStatistics = async (month, year) => {
    const data = await getStatistics(month, year);
    console.log("statistics data", data);
    setStatistics(data);
  };

  // Fetch bar chart data
  const fetchBarChartData = async (month) => {
    const data = await getBarChartData(month);
    setBarChartData(data);
    console.log("bar chart data", data);
  };

  // Fetch pie chart data
  const fetchPieChartData = async (month) => {
    const data = await getPieChartData(month);
    console.log("pie chart data", data);
    setPieChartData(data);
  };

  return (
    <div className="container">
      {/* Transaction Table */}
      <TransactionTable
        transactions={transactions}
        page={page}
        setPage={setPage}
      />

      {/* Statistics Section */}
      <button
        onClick={() => {
          setShowStatistics(!showStatistics);
          if (!showStatistics) {
            fetchStatistics(1, 2022); // You can pass dynamic month and year here
          }
        }}
        className="statistics-button"
      >
        {showStatistics ? "Hide Statistics" : "Show Statistics"}
      </button>
      {showStatistics && <StatisticsCards statistics={statistics} />}

      {/* Bar Chart Section */}
      <button
        onClick={() => {
          setShowBarChart(!showBarChart);
          if (!showBarChart) {
            fetchBarChartData(1); // You can pass dynamic month here
          }
        }}
        className="bar-chart-button"
      >
        {showBarChart ? "Hide Bar Chart" : "Show Bar Chart"}
      </button>
      {showBarChart && <BarChart data={barChartData} />}

      {/* Pie Chart Section */}
      <button
        onClick={() => {
          setShowPieChart(true);
          fetchPieChartData(1); // You can pass dynamic month here
        }}
        className="pie-chart-button"
      >
        Show Pie Chart
      </button>
      {showPieChart && (
        <PieChart data={pieChartData} onHide={() => setShowPieChart(false)} />
      )}
    </div>
  );
};

export default App;
