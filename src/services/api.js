import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api'; // Change this to your backend URL

export const api = {
  getTransactions: async (month, search, page) => {
    try {
      const response = await axios.get(`${BASE_URL}/transactions`, {
        params: { month, search, page }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching transactions:', error);
      throw error;
    }
  },

  getStatistics: async (month) => {
    try {
      const response = await axios.get(`${BASE_URL}/statistics`, {
        params: { month }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching statistics:', error);
      throw error;
    }
  },

  getBarChartData: async (month) => {
    try {
      const response = await axios.get(`${BASE_URL}/bar-chart`, {
        params: { month }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching bar chart data:', error);
      throw error;
    }
  },

  getPieChartData: async (month) => {
    try {
      const response = await axios.get(`${BASE_URL}/pie-chart`, {
        params: { month }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching pie chart data:', error);
      throw error;
    }
  }
};