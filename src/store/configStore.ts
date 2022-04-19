/**
 * 基础配置store
 */

import {flow} from 'mobx';
import request from '@untils/request';

export interface IConf {
    username: string,
    password: string,
    birthday?: number,
    name?: string,
    email?: string
}

class ConfigStore {
    fetchCreate = flow<void, [conf: IConf]>(function* _(this: ConfigStore, conf) {
        try {
            yield ConfigStore.create(conf);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);

    constructor() {

    }

    static create = (conf: IConf): Promise<void> => {
        return request
            .post('/api/user/create', conf);
    }
}

export default new ConfigStore();
