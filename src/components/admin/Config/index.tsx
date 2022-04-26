import React, {useCallback, useEffect} from 'react';
import {observer} from 'mobx-react';

// components
import {Button, Form, Input, Modal} from "antd";

// model
import AdminConfig, {IConf} from '@models/admin/Config';
import router from 'next/router';
import debounce from 'lodash.debounce';

interface IProps {
    store: AdminConfig
}

const Config: React.FC<IProps> = observer((props) => {
    const [form] = Form.useForm();
    const {
        loading,
        update,
        fetchUpdateConf,
        fetchConf
    } = props.store;

    // nextJs use effect执行两次 这里防抖一下
    const getConf = debounce(() => {
        fetchConf()
            .then(() => {
                form.setFieldsValue(props.store)
            })
            .catch(() => {});
    }, 0);

    useEffect(() => {
        getConf();
    }, []);

    const onFinish = useCallback((values: IConf) => {
        fetchUpdateConf(values)
            .then(() => {
                update(values)
            })
            .catch(e => {
                Modal.error({
                    title: '失败',
                    content: `修改失败，${e.message}`
                })
            });
    }, [fetchUpdateConf, update]);

    return (
        <div>
            <Form form={form} onFinish={onFinish}>
                <Form.Item name="logo" label="LOGO标题">
                    <Input type="text" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="邮箱"
                    rules={[
                        {type: 'email', message: '请输入正确邮箱地址'}
                    ]}
                >
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="icp" label="备案号">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="title" label="seo网站标题">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="description" label="seo网站介绍">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="keyword" label="seo网站关键词" tooltip="请以英文逗号（,）分隔">
                    <Input type="text" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        提交
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
});

export default React.memo(Config);
