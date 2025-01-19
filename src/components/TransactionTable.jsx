import React, { useState } from 'react';

const TransactionTable = ({ transactions, page, setPage }) => {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchText, setSearchText] = useState('');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    setPage(page > 1 ? page - 1 : 1);
  };

  return (
    <div>
      <div className="header">
        <h1>Transaction Dashboard</h1>
        <input
          type="text"
          className="search-box"
          placeholder="Search transaction"
          value={searchText}
          onChange={handleSearchChange}
        />
        <select className="select-month" value={selectedMonth} onChange={handleMonthChange}>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Category</th>
              <th>Sold</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {transactions
              .filter((transaction) =>
                transaction.title.toLowerCase().includes(searchText.toLowerCase()) ||
                transaction.description.toLowerCase().includes(searchText.toLowerCase())
              )
              .slice((page - 1) * 10, page * 10)
              .map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.id}</td>
                  <td>{transaction.title}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.price}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.sold}</td>
                  <td><img src={transaction.image} alt={transaction.title} width="50" /></td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={handlePreviousPage}>Previous</button>
        <span className="page-info">Page No: {page}</span>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default TransactionTable;
