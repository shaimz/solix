const mix = require('laravel-mix');

require('laravel-mix-criticalcss');
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app.scss', 'public/css');
mix.sass('resources/sass/backend.scss', 'public/css');
mix.sass('resources/sass/frontend.scss', 'public/css');
mix.sass('resources/sass/1024.scss', 'public/css');
mix.sass('resources/sass/768.scss', 'public/css');
mix.sass('resources/sass/320.scss', 'public/css');
mix.sass('resources/sass/0.scss', 'public/css').version();
