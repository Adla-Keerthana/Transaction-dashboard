import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import StatisticsCards from './components/StatisticsCards';
import BarChart from './components/BarChartComponent';
import PieChart from './components/PieChartComponent';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [page, setPage] = useState(1);
  const [showStatistics, setShowStatistics] = useState(false);
  const [showBarChart, setShowBarChart] = useState(false);
  const [showPieChart, setShowPieChart] = useState(false);

  // Example: Fetch or pass transaction data
  const fetchTransactions = () => {
    setTransactions([
      { id: 1, title: 'Product 1', description: 'Sample product', price: '$100', category: 'A', sold: 'Yes', image: 'product1.jpg' },
      { id: 2, title: 'Product 2', description: 'Another product', price: '$200', category: 'B', sold: 'No', image: 'product2.jpg' },
    ]);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

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
        onClick={() => setShowStatistics(!showStatistics)} 
        className="statistics-button"
      >
        {showStatistics ? 'Hide Statistics' : 'Show Statistics'}
      </button>
      {showStatistics && <StatisticsCards />}

      {/* Bar Chart Section */}
      <button 
        onClick={() => setShowBarChart(!showBarChart)} 
        className="bar-chart-button"
      >
        {showBarChart ? 'Hide Bar Chart' : 'Show Bar Chart'}
      </button>
      {showBarChart && <BarChart />}

      {/* Pie Chart Section */}
      {!showPieChart && (
        <button 
          onClick={() => setShowPieChart(true)} 
          className="pie-chart-button"
        >
          Show Pie Chart
        </button>
      )}
      {showPieChart && (
        <PieChart onHide={() => setShowPieChart(false)} />
      )}
    </div>
  );
};

export default App;