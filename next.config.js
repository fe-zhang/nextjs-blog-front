/** @type {import('next').NextConfig} */

const path = require('path');
const withAntdLess = require('next-plugin-antd-less');
const withPlugins = require('next-compose-plugins');

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
    // cssLoaderOptions: {
    // esModule: false,
    // sourceMap: false,
    // modules: {
    // mode: 'local',
    // localIdentName: '[hash:2]',
    // },
    // },
});

const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => rewritesConfig,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    },
    webpack(config) {
        return config;
    }
}

module.exports = withPlugins([[pluginAntdLess]], nextConfig);
