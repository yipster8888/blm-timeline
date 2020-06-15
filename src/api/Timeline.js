import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export default {
  getPosts: (filters) => {
    return axios.get(`${API_URL}timeline`, {
      params: filters,
    });
  },

  insertPost: (data, password) => {
    return axios.post(`${API_URL}timeline`, data, {
      headers: {
        authorization: "Bearer " + password,
      },
    });
  },
};
