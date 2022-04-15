/**
 * login
 */

import type { NextPage } from 'next';
import Link from 'next/link';

// components
import {Input, Button, Checkbox, Form} from 'antd';

// style
import cls from './index.module.sass';

const Login: NextPage = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className={cls.content}>
            <div className={cls.loginWrap}>
                <div className={cls.title}>叶落知秋</div>
                <Form
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input placeholder="用户名" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
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
}

export default Login;
