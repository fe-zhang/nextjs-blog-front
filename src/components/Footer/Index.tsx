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
                    <Link href='/'>京ICP备11111111号-1</Link>
                </span>
                <span className={cls.item}>
                    <Link href='/login'>登录</Link>
                </span>
            </div>
        </footer>
    );
}

export default Footer;
