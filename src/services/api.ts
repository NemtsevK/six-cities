import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import {getToken} from './token.ts';
import {BACKEND_URL, REQUEST_TIMEOUT, StatusCodeMapping} from './const.ts';

interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

type DetailMessageType = {
  type: string;
  message: string;
};

const shouldDisplayError = (response: AxiosResponse) =>
  StatusCodeMapping[response.status];

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config): AdaptAxiosRequestConfig => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;

        toast.warn(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
