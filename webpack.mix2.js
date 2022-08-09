const mix = require('laravel-mix');
const path = require('path');




mix.options({
	processCssUrls: false
})


mix.js('resources/js/app.js', 'public/js')
    .vue()
    .version()
    
    .alias({
    '@': path.join(__dirname, 'resources/js'),
    '@backend': path.join(__dirname, 'resources/js/backend'),
    '@frontend': path.join(__dirname, 'resources/js/frontend'),
    '@mixin': path.join(__dirname, 'resources/js/mixins'),
    '@css': path.join(__dirname,'public/css'),
    '@img': path.join(__dirname,'resources/js/assets/img'),
})

    .webpackConfig(require('./webpack.config'));
