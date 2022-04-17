import type { NextPage } from 'next';
import { Layout, Menu } from 'antd';
const { Header, Sider, Content } = Layout;
import cls from './index.module.sass';
import React, {useState} from "react";

import {AiOutlineMenuFold, AiOutlineMenuUnfold} from "react-icons/ai";

const Home: NextPage = () => {
    const [collapsed, setCollapsed] = useState(false);

    const toggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout className={cls.layout}>
            <Sider className={cls.menu} trigger={null} collapsible collapsed={collapsed}>
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        用户资料填写
                    </Menu.Item>
                    {/*<Menu.Item key="1">*/}
                    {/*    页面配置*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="2">*/}
                    {/*    文章管理*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="3">*/}
                    {/*    分类、标签管理*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="4">*/}
                    {/*    相册管理*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="5">*/}
                    {/*    评论管理*/}
                    {/*</Menu.Item>*/}
                    {/*<Menu.Item key="6">*/}
                    {/*    用户管理*/}
                    {/*</Menu.Item>*/}
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

                </Content>
            </Layout>
        </Layout>
    )
}

export default Home
