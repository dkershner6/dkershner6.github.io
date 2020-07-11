const generatePageList = require('./scripts/generatePageList');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
    webpack: (config, { isServer }) => {
        if (isServer) {
            generatePageList();
        }
        return config;
    }
});
