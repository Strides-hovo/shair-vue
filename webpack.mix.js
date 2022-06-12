const mix = require('laravel-mix');
const path = require('path');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .alias({
    '@': path.join(__dirname, 'resources/js'),
    '@mixin': path.join(__dirname, 'resources/js/mixins'),
    '@css': path.join(__dirname,'public/css'),
    '@img': path.join(__dirname,'public/img'),
}).webpackConfig(require('./webpack.config'));
