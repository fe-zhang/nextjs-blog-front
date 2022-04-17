// eslint-disable-next-line func-names
module.exports = function (api) {
    api.cache(true);

    return {
        presets: [['next/babel']],
        plugins: [
            ['import', { libraryName: 'antd', style: true }],
            ['module-resolver', {
                alias: {
                    '@': './src',
                    '@components': './src/components',
                    '@adminComponents': './src/components/admin',
                    '@style': './src/styles',
                    '@models': './src/models',
                    '@store': './src/store',
                    '@hooks': './src/hooks',
                    '@constants': './src/constants'
                }
            }],
            ['inline-react-svg'],
            ['add-react-displayname'],
        ],
    };
};
