const isDev = process.env.NODE_ENV === 'development' ? true : false;
const baseUrl = {
    local: 'http://localhost:3000',
    online: 'https://api.zhangyulin.cn'
};
export const apiUrl = isDev ? baseUrl.local : baseUrl.online;
