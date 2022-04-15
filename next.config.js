/** @type {import('next').NextConfig} */

const path = require('path');
const withPlugins = require("next-compose-plugins");
const withAntdLess = require('next-plugin-antd-less');

const isDevelopment = process.env.NODE_ENV !== "production";
// proxy
const rewritesConfig = isDevelopment
    ? [
        {
            source: "/api/:path*",
            destination: 'http://localhost:8888/:path*'
        }
    ] : [];

const pluginAntdLess = withAntdLess({
    lessVarsFilePath: './src/styles/variables.less',
});

const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => rewritesConfig,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

module.exports = withPlugins([[pluginAntdLess]], nextConfig);
