/** @type {import('next').NextConfig} */

const path = require('path');

const isDevelopment = process.env.NODE_ENV !== "production";
// proxy
const rewritesConfig = isDevelopment
    ? [
        {
        source: "/api/:path*",
        destination: 'http://localhost:8888/:path*'
        }
    ] : [];


const nextConfig = {
    reactStrictMode: true,
    rewrites: async () => rewritesConfig,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}

module.exports = nextConfig
