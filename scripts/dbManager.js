const data = require("../src/Data");
const axios = require("axios");
const API_URL = "http://localhost:8080";

insertPost = (data, password) => {
  return axios.post(`${API_URL}/timeline`, data, {
    headers: {
      authorization: "Bearer " + password,
    },
  });
};

(async () => {
  for (let i = 0; i < data.length; i++) {
    await insertPost(data[i], "radu_pls");
  }
})();