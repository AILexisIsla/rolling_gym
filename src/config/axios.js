import axios from "axios";

export const classInstance = axios.create({
  baseURL: process.env.REACT_APP_GYMNASIO_ROLLING_CLASS,
});
export const userInstance = axios.create({
  baseURL: process.env.REACT_APP_GYMNASIO_ROLLING_USER,
});

export const climaApi = axios.create({
  baseURL: process.env.REACT_APP_CLIMA,
});
