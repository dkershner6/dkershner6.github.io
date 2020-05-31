const webpack = require('webpack');
require('dotenv').config();
const generatePageList = require('./scripts/generatePageList');

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            generatePageList();
        }
        return config;
    }
};
