/**
 * 基础配置store
 */

import {flow} from 'mobx';
import request from '@untils/request';

export interface IConf {
    userName?: string,
    password: string,
    birthday?: number,
    userId: string,
    email?: string
}

class Config {
    fetchCreate = flow<void, [conf: IConf]>(function* _(this: Config, conf) {
        try {
            yield Config.create(conf);
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

export default new Config();
