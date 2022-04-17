/**
 * 基础配置store
 */

import {flow} from 'mobx';
import axios from 'axios';

export interface IConf {
    userName: string,
    password: string,
    birthday?: number,
    userId?: string,
    email?: string
}

class Config {

    fetchCreate = flow<void, [conf: IConf]>(function* _(this: Config, conf) {
        yield Config.create(conf)
    }).bind(this);

    constructor() {

    }

    static create = (conf: IConf): Promise<void> => {
        return axios
            .post('/api/user/add', conf);
    }
}

export default new Config();
