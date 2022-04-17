import type { NextPage } from 'next';
import {useState} from 'react';

// store
import HomeStore from '../store/HomeStore';

// components
import Banner from '@components/Banner/Index';
import cls from './index.module.sass';

const end = [
    {
        text: '项目基本配置',
        status: 1
    },
    {
        text: '连通数据库',
        status: 1
    },
    {
        text: '登录功能',
        status: 0
    },
    {
        text: '文章接口',
        status: 0
    },
    {
        text: '留言接口',
        status: 0
    },
    {
        text: '图片上传接口 + 连接图像存储服务器',
        status: 0
    },
    {
        text: '项目部署',
        status: 0
    }
]

const front = [
    {
        text: '项目基本配置',
        status: 1
    },
    {
        text: '页面跳转Progress',
        status: 1
    },
    {
        text: 'config页面（缺少一些错误处理）',
        status: 1
    },
    {
        text: '项目部署 - nginx 反向代理到80到node服务端口 + PM2进程守护',
        status: 1
    },
    {
        text: 'nginx反向代理/api路由到server服务',
        status: 1
    },
    {
        text: '黑白主题',
        status: 1
    },
    {
        text: '登录页 + 权限控制',
        status: 0
    },
    {
        text: '后台管理 - 基本配置',
        status: 0
    },
    {
        text: '后台管理 - 文章管理',
        status: 0
    },
    {
        text: '后台管理 - 相册管理',
        status: 0
    },
    {
        text: '后台管理 - 用户管理',
        status: 0
    },
    {
        text: '后台管理 - 留言管理',
        status: 0
    },
    {
        text: '主页 + 响应式',
        status: 0
    },
    {
        text: '文章页面',
        status: 0
    },
    {
        text: '相册页面',
        status: 0
    },
    {
        text: '留言板',
        status: 0
    },
    {
        text: '接入微信管理类似说说功能',
        status: 0
    },
    {
        text: '二次封装axios',
        status: 0
    }
]

const Home: NextPage = () => {
    const [store] = useState(HomeStore);
    return (
        <div>
            <Banner {...store.banner} />
            <div className={cls.wrap}>
                <div>
                    <span className={cls.title}>找工作进度：</span>
                    <p className={cls.des}>
                        今年真的难，没啥面试机会，周一面试字节外包，好运🍀～
                    </p>
                </div>
                <div>
                    <span className={cls.title}>后端：</span>
                    {
                        end.map(item => {
                            const txt = item.text;
                            const status = item.status === 1 ? '✅' : '❌';
                            return (
                                <p className={cls.des} key={txt}>{txt} - {status}</p>
                            );
                        })
                    }
                </div>
                <div>
                    <span className={cls.title}>前端</span>
                    {
                        front.map(item => {
                            const txt = item.text;
                            const status = item.status === 1 ? '✅' : '❌';
                            return (
                                <p className={cls.des} key={txt}>{txt} - {status}</p>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Home
