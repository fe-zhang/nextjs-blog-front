/**
 * config
 */

import {flow, makeObservable, observable, action} from 'mobx';
import request from '@untils/request';

export interface IConf {
    title: string;
    description: string;
    keyword: string;
    icp: string;
    email: string;
    loading: boolean;
    logo: string;
}

interface IConfSnapShot extends IConf {
    update(d: IConf): void;
}

class AdminConfig implements IConfSnapShot {
    /**
     * logo标题
     */
    logo: string = '';

    /**
     * 网页标题
     */
    title: string = '';

    /**
     * 网页介绍
     */
    description: string = '';

    /**
     * 网页keyword
     */
    keyword: string = '';

    /**
     * icp备案号
     */
    icp: string = '';

    /**
     * 邮件地址，用于调用头像
     */
    email: string = '';

    /**
     * 更新loading
     */
    loading: boolean = false;

    fetchUpdateConf = flow<void, [conf: IConf]>(function* _(this: AdminConfig, conf) {
        this.loading = true;
        try {
            yield AdminConfig.updateConf(conf);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
        finally {
            this.loading = false;
        }
    }).bind(this);

    fetchConf = flow<void, []>(function* _(this: AdminConfig) {
        try {
            const res = yield AdminConfig.getConf();
            this.update(res);
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error(e.message);
            }
        }
    }).bind(this);

    constructor() {
        makeObservable(this, {
            title: observable,
            description: observable,
            keyword: observable,
            icp: observable,
            email: observable,
            loading: observable,
            update: action.bound
        });
        // 只需要调用一次，就直接构造时候赋值了
        this.fetchConf()
            .catch(() => {});
    }

    update(d: IConf) {
        Object.assign(this, d);
    }

    static updateConf = (conf: IConf): Promise<void> => {
        return request
            .post('/conf/update', conf);
    }

    static getConf = (): Promise<IConf> => {
        return request
            .get('/conf/info');
    }
}

export default AdminConfig;
