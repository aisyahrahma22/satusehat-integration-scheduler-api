import axios from 'axios';

function POST(baseURL, endpoint, data = {}, options = {}, token) {
  let url = baseURL + endpoint;

  const baseConfig = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    timeout: 60000,
    withCredentials: false,
  };


  const config = {
    baseURL,
    ...baseConfig,
    ...options,
    method: 'post',
    url,
    data: JSON.stringify(data),
  };
  return axios(config);
}

export default {
  get POST() {
    return POST;
  },
};
