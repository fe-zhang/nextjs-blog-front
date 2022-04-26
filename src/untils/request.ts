import axios from 'axios';
import apiUrl from '../config/apiUrl';

const request = axios.create({
    baseURL: apiUrl,
    timeout: 100000,
    headers: {},
    // 跨域cookie
    withCredentials: true
});

// 请求拦截器 请求的时候做点什么
// request.interceptors.request.use((conf) => {
//     return conf;
// }, (err) => {
//     return Promise.reject((err));
// });

// 响应拦截器 响应的时候，接口有可能200返回的却是错误码
request.interceptors.response.use((res) => {
    const {errCode, message} = res.data;
    if (errCode) {
        throw new Error(message);
        return;
    }
    return res.data;
}, (err) => {
    return Promise.reject(err);
});

export default request;
