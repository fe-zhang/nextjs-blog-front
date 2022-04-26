/**
 * 管理页面
 */

import React, {SetStateAction, useCallback, useEffect, useMemo, useState} from 'react';
import Router, {useRouter} from 'next/router';
import {observer} from 'mobx-react';

// components
import {Layout, Menu, Modal} from 'antd';

// store
import GlobalStore from '@store/globalStore';
import AdminStore from '@store/adminStore';

// style
import cls from './index.module.sass';

// svg
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import Config from '@adminComponents/Config';
import Article from '@adminComponents/Article';

const {Header, Sider, Content} = Layout;

const path = [
    {
        name: '控制台',
        key: 'console'
    },
    {
        name: '新增文章',
        key: 'article'
    },
    {
        name: '分类管理',
        key: 'category'
    },
    {
        name: '标签管理',
        key: 'tags'
    },
    {
        name: '友链管理',
        key: 'links'
    },
    {
        name: '网站配置',
        key: 'conf'
    }
]

const Admin: React.FC = observer(() => {
    const [collapsed, setCollapsed] = useState(false);
    const [cur, setCur] = useState('console');
    const [store] = useState(AdminStore);

    const jumpLogin = () => {
        window.location.href = '/login';
    }

    useEffect(() => {
        if (!GlobalStore.isLogin) {
            jumpLogin();
        }
    }, []);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const logout = () => {
        GlobalStore.fetchIsLogout()
            .then(() => {
                jumpLogin();
            })
            .catch(() => {});
    }

    const setMenu = useCallback((e: { key: SetStateAction<string>; }) => {
        setCur(e.key)
    }, []);

    const component = useMemo(() => {
        switch (cur) {
            case 'conf':
                return <Config store={store.config} />;
            case 'article':
                return <Article />
        }
    }, [cur, store.config]);

    return (
        <Layout className={cls.layout}>
            <Sider className={cls.menu} trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                {/*@ts-ignore*/}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={cur} onSelect={setMenu}>
                    {
                        path.map(item => {
                            return (
                                <Menu.Item key={item.key}>{item.name}</Menu.Item>
                            );
                        })
                    }
                </Menu>
            </Sider>
            <Layout className={cls.layout}>
                <Header className={cls.header} style={{ padding: 0 }}>
                    <div className={cls.menuBtn} onClick={toggle}>
                        {
                            collapsed ?  <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />
                        }
                    </div>
                </Header>
                <Content
                    className={cls.content}
                >
                    <div onClick={logout}>logout</div>
                    {component}
                </Content>
            </Layout>
        </Layout>
    )
})

export default Admin;
