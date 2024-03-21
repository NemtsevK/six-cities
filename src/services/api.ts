import axios, {AxiosError, AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse} from 'axios';
import {getToken} from './token.ts';
import {processErrorHandle} from './process-error-handle.ts';
import {BACKEND_URL, REQUEST_TIMEOUT, StatusCodeMapping} from './const.ts';

type DetailMessageType = {
  type: string;
  message: string;
};

const shouldDisplayError = (response: AxiosResponse) => StatusCodeMapping[response.status];

interface InternalAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<DetailMessageType>) => {
      if (error.response && shouldDisplayError(error.response)) {
        const detailMessage = error.response.data;

        processErrorHandle(detailMessage.message);
      }

      throw error;
    }
  );

  return api;
};
