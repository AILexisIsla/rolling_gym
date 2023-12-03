import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_GYMNASIO_ROLLING_CLASS,
});

export default instance;
