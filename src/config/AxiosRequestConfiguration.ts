import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import envConfig from './EnvConfig';

export const axiosRequestConfiguration: AxiosRequestConfig = {
  baseURL: envConfig.url,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
};

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  return axios.create(config);
};

export default initialization;
