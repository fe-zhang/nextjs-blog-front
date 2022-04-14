import {makeObservable} from "mobx";

export interface IBanner {
    src: string,
    title: string,
    desc?: string
}

class HomeStore {
    banner: IBanner = {
        src: 'https://oss.imwgh.com/2022/04/1452638738.jpg',
        title: 'aaaa',
        desc: 'bbbb'
    }
    constructor() {

    }
}

export default new HomeStore();