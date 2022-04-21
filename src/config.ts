const isDev = process.env.NODE_ENV === 'development' ? true : false;
const baseUrl = {
    local: 'http://localhost:3000',
    online: 'https://wwww.zhangyulin.cn'
};
export const url = isDev ? baseUrl.local : baseUrl.online;
