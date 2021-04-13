import axios from 'axios';
import { baseUrl } from '../configs/api';
import { getToken } from './token';

const apiUrl = `${baseUrl}/api/`;
const token = getToken();

const request = axios.create({
  baseURL: apiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
});

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  console.log('request');
  return config;
}, function (error) {
  // Do something with request error
  console.log('request error');
  return Promise.reject(error);
});
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  console.log('response');
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  console.log('response error');
  return Promise.reject(error);
});

export default {
  get (url) {
    return request.get(url);
  },
  post (url, data) {
    return request.post(url, data);
  },
  put (url, data) {
    return request.put(url, data);
  },
  delete(url) {
    return request.delete(url);
  },
  uploadFile(file) {
    let formData = new FormData();
    formData.append('file', file);
    return request.post('storage/store-file', formData);
  }
}
