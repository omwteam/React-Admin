const path = require('path');
const {injectBabelPlugin} = require('react-app-rewired');

module.exports = function override(config, env) {
    config.resolve.alias = {
        '@': path.join(__dirname, './src')
    }
    config = injectBabelPlugin([
        'import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css'
        }
    ], config);
    return config;
};