#!/bin/sh
echo " ===== 开始拉去仓库最新代码 ===== "
cd /www/wwwroot/nextjs-blog-front
#git clone git@github.com:fe-zhang/nextjs-blog-front.git
echo " ===== 当前路径 ===== "
pwd;
git pull; git status;
echo "       "
git log --pretty=format:"%h - %an, %ar : %s" -5;

echo "开始安装依赖"
yarn;

echo " ===== 开始打包 ====="
yarn build;

echo " ===== PM2开始重启 =====";
pm2 kill all
pm2 start yarn --watch --name "next-js" --interpreter bash -- start
#pm2 reload zuanshi-pc-test;

