const mix = require('laravel-mix');
const path = require('path')


mix
    .js(
        'resources/js/app.js',
        'public/assets/js'
    )
    .vue({version: 3})
    .options({
        processCssUrls: false,
    })
    .alias({
        '@': path.join(__dirname, 'resources/js'),
        '@backend': path.join(__dirname, 'resources/js/backend'),
        '@frontend': path.join(__dirname, 'resources/js/frontend'),
        '@img': path.join(__dirname,'resources/js/assets/img'),
    })
    .disableNotifications()
    .version().webpackConfig(require('./webpack.config')).sourceMaps();