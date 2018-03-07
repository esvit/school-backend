import axios from 'axios'

const storage = {
  getToken() {
    return this.token;
  },
  setToken(token) {
    this.token = token;
  }
};

const configure = axios => {
  axios.defaults.baseURL = '/api';

  axios.interceptors.request.use(config => {
    config.headers.authorization = storage.getToken();
    return config
  });

  axios.interceptors.response.use(
    response => {
      const { authorization } = response.headers;
      if (authorization) {
        storage.setToken(authorization);
      }
      return response
    },
    error => {
      if (error.response.status === 401) {
        return new Promise((resolve, reject) => {
          storage.setToken('');
          return reject(error.response.data)
        })
      }
      return new Promise((resolve, reject) => reject(error.response.data))
    }
  );
  return axios
};

export default configure(axios)
