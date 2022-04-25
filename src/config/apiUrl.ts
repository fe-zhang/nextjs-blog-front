const isDev = process.env.NODE_ENV === 'development' ? true : false;
const baseUrl = {
    local: 'http://localhost:3000',
    online: 'https://api.zhangyulin.cn'
};
const apiUrl = isDev ? baseUrl.online : baseUrl.online;

export default apiUrl;
