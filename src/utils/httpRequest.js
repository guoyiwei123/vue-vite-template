import axios from 'axios';
axios.interceptors.response.use(
    response =>  response.data,
    error => Promise.reject(error)
)
export default axios;