/**
 * 基础配置store
 */

import {flow} from 'mobx';
import request from '@untils/request';

export interface IConf {
    form: string,
    password: string,
    username: string
}

class LoginStore {
    fetchLogin = flow<void, [conf: IConf]>(function* _(this: LoginStore, conf) {
        try {
            yield LoginStore.login(conf);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);

    constructor() {

    }

    static login = (conf: IConf): Promise<void> => {
        return request
            .post('/api/user/login', conf);
    }
}

export default new LoginStore();
