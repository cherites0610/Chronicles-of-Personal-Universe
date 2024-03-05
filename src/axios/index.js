import Axios from "axios";
const instance = Axios.create({
    baseURL: '/api/',
    timeout: 1000,
  });

export default instance;