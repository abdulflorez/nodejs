const axios = require('axios');

const httpClientPlugin = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;
  },
  post: async () => {},
  put: async () => {},
  delete: async () => {},
};

module.exports = {
  http: httpClientPlugin,
};
