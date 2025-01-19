import React from 'react';

const StatisticsCards = () => {
  return (
    <div className="statistics-container">
      <h2>Statistics - June</h2> {/* Replace with the dynamic month if needed */}
      <div className="statistics-item">
        <strong>Total Sale</strong>: 100000
      </div>
      <div className="statistics-item">
        <strong>Total Sold Item</strong>: 55
      </div>
      <div className="statistics-item">
        <strong>Total Not Sold Item</strong>: 15
      </div>
    </div>
  );
};

export default StatisticsCards;
