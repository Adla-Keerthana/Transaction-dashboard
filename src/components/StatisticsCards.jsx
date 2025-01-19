import React from "react";

const StatisticsCards = ({ statistics }) => {
  return (
    <div className="statistics-container">
      <h2>Statistics - June</h2>{" "}
      {/* Replace with the dynamic month if needed */}
      <div className="statistics-item">
        <strong>Total Sale</strong> :{statistics?.totalSales}
      </div>
      <div className="statistics-item">
        <strong>Total Sold Item</strong> :{statistics?.soldItems}
      </div>
      <div className="statistics-item">
        <strong>Total Not Sold Item</strong> :{statistics?.notSoldItems}
      </div>
    </div>
  );
};

export default StatisticsCards;
