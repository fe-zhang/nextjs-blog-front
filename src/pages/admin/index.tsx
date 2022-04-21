/**
 * 管理页面
 */

import type { NextPage } from 'next';
import {SetStateAction, useCallback, useEffect, useMemo, useState} from 'react';
import Router from 'next/router';
import {observer} from 'mobx-react';

// components
import {Layout, Menu, Modal} from 'antd';

// store
import GlobalStore from '@store/globalStore';

// style
import cls from './index.module.sass';

// svg
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai';
import Config from '@adminComponents/Config';
import Article from '@adminComponents/Article';

const {Header, Sider, Content} = Layout;

const path = [
    {
        name: '页面配置',
        key: 'conf'
    },
    {
        name: '分类管理',
        key: 'category'
    }
]

const Admin: NextPage = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [cur, setCur] = useState('conf');

    useEffect(() => {
        if (!GlobalStore.userName) {
            Router.push('/login');
        }
    }, []);

    const pages = useMemo(() => {
        switch (cur) {
            case 'conf':
                return <Config/>;
            case 'category':
                return <Article/>;
            default:
                return null
        }
    }, [cur])

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    const setMenu = useCallback((e: { key: SetStateAction<string>; }) => {
        setCur(e.key)
    }, []);

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
            <Layout className="site-layout">
                <Header className={cls.header} style={{ padding: 0 }}>
                    <div className={cls.menuBtn} onClick={toggle}>
                        {
                            collapsed ?  <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />
                        }
                    </div>
                </Header>
                <Content
                    className="site-layout-background"
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                    }}
                >
                    {
                        pages
                    }
                </Content>
            </Layout>
        </Layout>
    )
};

export default Admin;
