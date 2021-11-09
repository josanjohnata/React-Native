import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gama-next-server.herokuapp.com/'
});

export default api;