import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default {
  getCities: (filters) => {
    return axios.get(`${API_URL}/city`);
  },

  getCity: (id) => {
    return axios.get(`${API_URL}/city`, {
      params: { id },
    });
  },

  insertCity: (data) => {
    return axios.post(`${API_URL}/city`, data);
  },
};
