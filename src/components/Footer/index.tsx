import React from 'react';

// style
import cls from './index.module.sass';

interface IProps {
    icp: string;
}

const Footer: React.FC<IProps> = (props) => {
    const icp = props.icp;

    return (
        <footer className={cls.footer}>
            <div className={cls.container}>
                <span className={cls.item}>
                    © 2022 <a className={cls.title} href='https://zhangyulin.cn'>Lin</a>
                </span>
                {
                    icp && (
                        <span className={cls.item}>
                            <a target="_blank" href='https://beian.miit.gov.cn/' rel="noreferrer">{icp}</a>
                        </span>
                    )
                }
            </div>
        </footer>
    );
}

export default Footer;
