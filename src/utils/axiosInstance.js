import axios from 'axios';
import { getToken } from './token';

const apiUrl = 'http://localhost:8000/api/';
const token = getToken();

const request = axios.create({
  baseURL: apiUrl,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
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
  }
}
