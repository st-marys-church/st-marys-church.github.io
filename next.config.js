const isGhPages = process.env.GITHUB_WORKFLOW === 'gh-pages'
const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
    [optimizedImages, {

    }],
    {
        // basePath: isGhPages ? '/st-marys-colombo4' : '',
        trailingSlash: true
    }
]);
