const data = require("../src/Data");
const axios = require("axios");
const API_URL = "https://blm-timeline-server.herokuapp.com";

insertPost = (data, password) => {
  return axios.post(`${API_URL}/timeline`, data, {
    headers: {
      authorization: "Bearer " + password,
    },
  });
};

(async () => {
  for (let i = 0; i < data.length; i++) {
    await insertPost(data[i], `z7+Fzs8eB]Yc-=V4`);
  }
})();