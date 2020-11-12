const axios = require('axios');
const api = {
  async getUser(responses) {
    try { const resp = await axios
        .get(`https://api.github.com/users/${responses.username}`);
        return resp.data;
      } catch (error) {
        console.log(error);
      }
  }
};
module.exports = api;