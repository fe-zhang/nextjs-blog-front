import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

// style
import cls from './Index.module.sass';

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <span className={cls.item}>
                    © 2022 Powered by <Link href='/'>Lin</Link>
                </span>
                <span className={cls.item}>
                    <a target="_blank" href='https://beian.miit.gov.cn/' rel="noreferrer">京ICP备2021026354号-1</a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
