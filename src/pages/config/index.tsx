/**
 * 配置后台用户名密码
 */

import {NextPage} from 'next';
import {observer} from 'mobx-react';
import Router from 'next/router';

// store
import store, {IConf} from '@store/configStore';

// style
import cls from './index.module.sass';

// components
import {Form, Input, Button, Modal} from 'antd';
import {useCallback} from 'react';

const formItemLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    },
};

const formSubmitLayout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 8, offset: 4 },
};

const Config: NextPage = observer(() => {
    const {
        fetchCreate
    } = store;

    const successOnOk = () => {
        Router.push('/admin');
    };

    const onFinish = useCallback((conf: IConf) => {
        fetchCreate(conf)
            .then((res) => {
                Modal.success({
                    title: '成功',
                    content: '创建成功，点击确认跳转到管理页面',
                    okText: '确认',
                    onOk: successOnOk
                })

            })
            .catch(e => {
                Modal.error({
                    title: '失败',
                    content: e.message,
                    okText: '确定'
                });
            });
    }, [fetchCreate]);

    return (
        <div className={cls.config}>
            <div className={cls.wrap}>
                <div className={cls.title}>
                    后台配置
                </div>
                <div className={cls.des}>
                    此页面配置后台登录的用户名和密码，成功后请在项目中删除！
                </div>
                <Form className={cls.form} onFinish={onFinish}>
                    <Form.Item
                        name="username"
                        label="用户名"
                        {...formItemLayout}
                        rules={[
                            {
                                required: true,
                                message: '请填写用户名'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        label="密码"
                        {...formItemLayout}
                        rules={[
                            {
                                required: true,
                                message: '请填写密码'
                            }
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item {...formSubmitLayout}>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Form>
            </div>

        </div>
    );
})

export default Config;
