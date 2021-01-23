const withSass = require('@zeit/next-sass');
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
	withSass,
	[withOptimizedImages, { optimizeImagesInDev: true }],
]);
