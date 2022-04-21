import React, {useCallback, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';

// hooks
import {useTheme} from 'next-themes';

// constants
import {NAVS} from '../../constants/page';

// style
import cls from './Index.module.sass';

// svg
import {MdLightMode, MdNightlight} from 'react-icons/md';

const Header: React.FC = () => {
    const [isSearch, setSearch] = useState(false);
    const {theme, setTheme} = useTheme();

    const onChangeTheme = useCallback(() => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }, [setTheme, theme]);

    return (
        <header className={cls.header}>
            {/*<div className={cls.container}>*/}
                <h1 className={cls.logo}>
                    <Link href='/'>
                        叶落知秋
                    </Link>
                </h1>
                <div className={cls.main}>
                    {/*<ul className={cls.navs}>*/}
                    {/*    {*/}
                    {/*        NAVS.map(nav => {*/}
                    {/*            return (*/}
                    {/*                <li className={cls.link} key={nav.path}>*/}
                    {/*                    <Link href={nav.path}>*/}
                    {/*                        {nav.name}*/}
                    {/*                    </Link>*/}
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
