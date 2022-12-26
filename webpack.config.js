const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require("vue-loader");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require("path");
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: "./resources/js/app.js",
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, "public"),
    },
    plugins: [
        new UglifyJsPlugin(),
        new HtmlWebpackPlugin(),
        new WebpackBundleAnalyzer(),
        new VuetifyLoaderPlugin(),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: `components/preload-[name].css`
        }),
        new PreloadWebpackPlugin({
            rel: 'preload',
            include: 'asyncChunks', // can be 'allChunks' or 'initial' or see more on npm page
            fileBlacklist: [/\.map|.js/], // here may be chunks that you don't want to have preloaded
        })
    ],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    // Translates CSS into CommonJS
                    'css-loader',
                    // Compiles Sass to CSS
                    'sass-loader',
                ],
            },
            {
                test: /\.(mov|mp4|m4v)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.vue$/,
                loader: "vue-loader",
                options: {
                    extractCSS: true
                }
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    optimization: {
        concatenateModules: true,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](vue|axios|jquery|bootstrap|lodash|vue-i18n|vue-router|vuex|vue-lazyload|vue-ls|popper)[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        },
    }
}
