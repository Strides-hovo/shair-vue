const mix = require('laravel-mix');
const path = require('path')


// require('laravel-mix-simple-image-processing')
//"laravel-mix-simple-image-processing": "^1.0.7",
mix
    .js(
        'resources/js/app.js',
        'public/assets/js'
    )
    .vue({version: 3})
    .options({
        processCssUrls: false,
    })
    // .imgs({
    //     source: 'resources/js/assets/img',
    //     destination: 'public/img',
    // })
    .alias({
        '@': path.join(__dirname, 'resources/js'),
        '@backend': path.join(__dirname, 'resources/js/backend'),
        '@frontend': path.join(__dirname, 'resources/js/frontend'),
        '@img': path.join(__dirname,'resources/js/assets/img'),
    })
    .disableNotifications()
    .version().webpackConfig(require('./webpack.config'));