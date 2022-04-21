import request from '@untils/request';

export async function getSortedPostsData() {
    const res = await request.get('/home');
    return res;
}
