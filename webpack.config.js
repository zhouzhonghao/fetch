'use strict'

const path = require('path');
const webpack = require('webpack');
const resolve = (dir) => {
    path.join(__dirname, '.', dir);
};

module.exports = (env, options) => {
    const isProd = (options.mode || process.env.NODE_ENV) == 'production';
    return {
        mode: isProd ? 'production' : 'development',
        entry: {
            index: [
                './src/index.js'
            ]
        },
        externals: {
            '@babel/polyfill': '@babel/polyfill',
            'url': 'url'
        },
        output: {
            path: path.join(__dirname, './lib'),
            filename: isProd ? '[name].min.js' : '[name].js',
            libraryTarget: 'umd',
            library: 'RFetch',
            libraryExport: 'default',
            globalObject: 'this'
        },
        devtool: 'hidden-source-map',
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: [
                        /node_modules/
                    ],
                    use: [
                        ...(
                            isProd
                                ? (
                                    []
                                )
                                : ([
                                    {
                                        loader: 'js-prettier-loader',
                                        options: {
                                            parser: 'babylon'
                                        }
                                    }
                                ])
                        ),
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    [
                                        '@babel/preset-env'
                                    ]
                                ],
                                plugins: [
                                    [
                                        '@babel/plugin-proposal-decorators',
                                        {
                                            decoratorsBeforeExport: false
                                        }
                                    ],
                                    [
                                        '@babel/plugin-proposal-class-properties',
                                        {
                                            loose: true
                                        }
                                    ]
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    };
};
