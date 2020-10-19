import axios from "axios";
// import { ContentType } from "../enums";
import { requestHandler, successResponseHandler, errorResponseHandler } from "./interceptors";
import { baseUrl } from '../api/endpoints';

const getAxiosInstance = () => {
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(requestHandler);
  instance.interceptors.response.use(successResponseHandler, errorResponseHandler);

  return instance;
}

export default getAxiosInstance();