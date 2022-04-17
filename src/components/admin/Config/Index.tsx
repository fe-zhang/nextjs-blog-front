import React from 'react';
import {observer} from 'mobx-react';
import {Form, Input} from "antd";


const Config: React.FC = observer(() => {
    return (
        <div>
            <Form>
                <Form.Item name="title" label="网站名称">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="desc" label="网站介绍">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="keyword" label="网站关键词">
                    <Input type="text" />
                </Form.Item>
                <Form.Item name="icp" label="备案号">
                    <Input type="text" />
                </Form.Item>
            </Form>
        </div>
    );
});

export default Config;
