import React, {useCallback, useState} from 'react';
import Link from 'next/link';

// hooks
import {useTheme} from 'next-themes';

// style
import cls from './index.module.sass';

// svg
import {MdLightMode, MdNightlight} from 'react-icons/md';

interface IProps {
    logo: string;
}

const Header: React.FC<IProps> = (props) => {
    const {theme, setTheme} = useTheme();
    const logo = props.logo;

    const onChangeTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [setTheme, theme]);

    return (
        <header className={cls.header}>
            {/*<div className={cls.container}>*/}
                <h1 className={cls.logo}>
                    <Link href='/'>
                        {logo ?? 'Lin'}
                    </Link>
                </h1>
                <div className={cls.main}>
                    {/*<ul className={cls.navs}>*/}
                    {/*    {*/}
                    {/*        NAVS.map(nav => {*/}
                    {/*            return (*/}
                    {/*                <li className={cls.link} key={nav.path}>*/}
                    {/*                    <Links href={nav.path}>*/}
                    {/*                        {nav.name}*/}
                    {/*                    </Links>*/}
                    {/*                </li>*/}
                    {/*            )*/}
                    {/*        })*/}
                    {/*    }*/}
                    {/*</ul>*/}
                    <div className={cls.theme} onClick={onChangeTheme}>
                        {
                            theme === 'light' ? <MdNightlight /> : <MdLightMode />
                        }
                    </div>
                </div>

            {/*</div>*/}

        </header>
    );
}

export default Header;
