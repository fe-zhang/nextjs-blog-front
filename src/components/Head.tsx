import Head from 'next/head';
import React from 'react';

interface IProps {
    title: string,
    description: string,
    keyword: string
}

const HeadView: React.FC<IProps> = (props) => {
    const {
        title,
        description,
        keyword
    } = props;
    return (
        <Head>
            <meta httpEquiv="content-type" content="text/html; charset=UTF-8" />
            <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta content="telephone=no" name="format-detection" />
            <meta name="renderer" content="webkit" />
            <title>{title ?? '叶落知秋 - 生如夏花'}</title>
            <meta name="description" content={description ?? '人生很短啊，每天都要开心、快乐。这里记录生活、学习、旅行，记录那些开心的、难过的、记录这短短的一生。'} />
            <meta name="keywords" content={keyword ?? '叶落知秋,zhangyulin,阿林,林哥,独立博客,前端,fe,blog,nextjs'} />
        </Head>
    )
}

export default React.memo(HeadView);
