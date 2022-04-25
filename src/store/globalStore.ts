/**
 * 全局store
 */

import {flow, makeObservable, observable} from 'mobx';
import request from '@untils/request';

class GlobalStore {
    userName: string = '';

    fetchPermission = flow<void, []>(function* _(this: GlobalStore) {
        try {
            const res = yield GlobalStore.permission();
            this.userName = res.username;
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);

    constructor() {
        makeObservable(this, {
            userName: observable
        });
        this.fetchPermission().catch(() => {});
    }

    static permission = (): Promise<void> => {
        return request.get('/user/permission');
    }
}

export default new GlobalStore();
