/**
 * 全局store
 */

import {flow, makeObservable, observable} from 'mobx';
import request from '@untils/request';

class GlobalStore {
    isLogin: boolean = false;

    fetchIsLogin = flow<void, []>(function* _(this: GlobalStore) {
        try {
            const res = yield GlobalStore.isLogin();
            this.isLogin = res.isLogin;
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);

    fetchIsLogout = flow<void, []>(function* _(this: GlobalStore) {
        try {
            yield GlobalStore.logout();
            this.isLogin = false;
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);


    constructor() {
        makeObservable(this, {
            isLogin: observable
        });
        this.fetchIsLogin().catch(() => {});
    }

    static isLogin = (): Promise<void> => {
        return request.get('/user/isLogin');
    }

    static logout = (): Promise<void> => {
        return request.get('/user/logout');
    }
}

export default new GlobalStore();
