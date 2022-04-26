/**
 * login
 */

import type { NextPage } from 'next';
import Link from 'next/link';
import {observer} from 'mobx-react';
import Router from 'next/router';
import {useEffect} from 'react';
import {Modal} from 'antd';

// store
import LoginStore from '@store/loginStore';
import GlobalStore from '@store/globalStore';

// components
import {Input, Button, Checkbox, Form} from 'antd';

// style
import cls from './index.module.sass';

const Login: NextPage = observer(() => {
    const jumpAdmin = () => {
        window.location.href = '/admin';
    }

    useEffect(() => {
        if (GlobalStore.isLogin) {
            jumpAdmin();
        }
    }, []);

    const onFinish = (values: any) => {
        LoginStore.fetchLogin(values)
            .then(() => {
                GlobalStore.fetchIsLogin()
                    .then(() => {
                        jumpAdmin();
                    })
                    .catch(() => {});
            })
            .catch(e => {
                Modal.error({
                    content: e.message,
                    okText: '确定'
                })
            })
    };

    return (
        <div className={cls.content}>
            <div className={cls.loginWrap}>
                <div className={cls.title}>叶落知秋</div>
                <Form
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: '请输入您的用户名' }]}
                    >
                        <Input placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: '请输入您的密码' }]}
                    >
                        <Input.Password placeholder="密码" />
                    </Form.Item>
                    <Form.Item name="remember" valuePropName="checked">
                        <Checkbox>下次自动登录</Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
                <Link href='/'>返回首页</Link>
            </div>
        </div>
    )
});

export default Login;
