/**
 * 管理页store
 */

import {makeObservable, observable} from 'mobx';
import AdminConfig from '@models/admin/Config';

class AdminStore {
    config: AdminConfig = new AdminConfig();

    constructor() {
        makeObservable(this, {
            config: observable
        });
    }
}

export default new AdminStore();
