const BASE_URL = 'http://localhost:5000/api'; // Change this to your backend URL

const api = {
  getTransactions: async (month = 1, search = '', page = 1) => {
    try {
      const response = await fetch(`${BASE_URL}/transactions?month=${month}&search=${search}&page=${page}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  },

  getStatistics: async (month, year) => { // Modified to accept year as well
    try {
      const response = await fetch(`${BASE_URL}/statistics?month=${month}&year=${year}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching statistics:', error);
      throw error;
    }
  },

  getBarChartData: async (month) => {
    try {
      const response = await fetch(`${BASE_URL}/bar-chart?month=${month}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
      throw error;
    }
  },

  getPieChartData: async (month) => {
    try {
      const response = await fetch(`${BASE_URL}/pie-chart?month=${month}`);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
      throw error;
    }
  }
};

export default api;
