const mix = require('laravel-mix');
require('vuetifyjs-mix-extension')
require('laravel-mix-bundle-analyzer');


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

mix.babelConfig({
    plugins: ['@babel/plugin-syntax-dynamic-import'],
});

mix.js('resources/js/app.js', 'public/js')
    .extract(['vue','vuetify']).vuetify()
mix.js('resources/js/backend.js', 'public/js').version();
mix.js('resources/js/frontend.js', 'public/js').version();
