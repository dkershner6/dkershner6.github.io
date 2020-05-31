const generatePageList = require('./scripts/generatePageList');

module.exports = {
    webpack: (config, { isServer }) => {
        if (isServer) {
            generatePageList();
        }
        return config;
    }
};
