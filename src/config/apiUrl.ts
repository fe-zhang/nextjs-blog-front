const isDev = process.env.NODE_ENV === 'development' ? true : false;
const baseUrl = {
    local: 'http://localhost:8016',
    online: 'https://api.zhangyulin.cn'
};
const apiUrl = isDev ? baseUrl.local : baseUrl.online;

export default apiUrl;
