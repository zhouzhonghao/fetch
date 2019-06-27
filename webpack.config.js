var path = require('path');
var webpack = require('webpack');
var resolve = (dir) => {
    path.join(__dirname, '.', dir);
};

module.exports = (env, options) => {
    var isProd = (options.mode || process.env.NODE_ENV) == 'production';
    return {
        mode: isProd ? 'production' : 'development',
        externals: {
        },
        entry: {
            index: [
                './src/index.js'
            ]
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
                                        '@babel/preset-env',
                                        {
                                            "targets": {
                                                "ie": 10
                                            },
                                            "useBuiltIns": false
                                        }
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
