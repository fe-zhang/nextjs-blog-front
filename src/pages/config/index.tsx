/**
 * 配置后台用户名密码
 */

import {NextPage} from 'next';
import {observer} from 'mobx-react';

// store
import store, {IConf} from '@store/Config';

// style
import cls from './index.module.sass';

// components
import {Form, Input, Button} from 'antd';

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

const Index: NextPage = observer(() => {
    const {
        fetchCreate
    } = store;

    const onFinish = (conf: IConf) => {
        fetchCreate(conf)
            .then(() => {
                alert(111)
            });
    };

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
                        name="userId"
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

export default Index;
