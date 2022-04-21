import React, {useCallback, useEffect, useRef} from 'react';

import cls from './Index.module.sass';

const AsideBar: React.FC = () => {


    return (
        <aside className={cls.aside}>
            <ul className={cls.item}>
                <li>首页</li>
                <li>哔哔</li>
                <li>代码</li>
                <li>随笔</li>
                <li>归档</li>
            </ul>
        </aside>
    );
}

export default AsideBar;
