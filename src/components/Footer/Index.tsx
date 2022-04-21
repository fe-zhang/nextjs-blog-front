import React from 'react';

// style
import cls from './Index.module.sass';

const Footer: React.FC = () => {
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <span className={cls.item}>
                    © 2022 <a className={cls.title} href='https://zhangyulin.cn'>Lin</a>
                </span>
                <span className={cls.item}>
                    <a target="_blank" href='https://beian.miit.gov.cn/' rel="noreferrer">京ICP备2021026354号-1</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
