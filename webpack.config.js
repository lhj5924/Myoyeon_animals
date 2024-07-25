const path = require('path');
// 플러그인
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const webpack = require("webpack");
const banner = require("./banner.js");

module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
    devtool: 'eval-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // html 파일을 생성해주는 플러그인
        new HtmlWebpackPlugin({
            template: './public/index.html', // 경로
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true,
            },
        }),
        // CSS 를 별도의 파일로 추출해주는 플러그인(캐싱, 병렬 다운로드 가능)
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css', // 추출된 CSS 파일 이름 설정
            chunkFilename: '[id].[contenthash].css',
        }),
        // 번들크기 시각화 플러그인 (빌드 후에 'http://127.0.0.1:8888' 혹은 dist > report.html 에서 확인 가능)
        new BundleAnalyzerPlugin(),
        // 빌드 시 커밋, 사용자, 날짜를 출력하는 커스텀 플러그인
        new webpack.BannerPlugin(banner),
        // 빌드 시 전체가 아닌 변경된 모듈만 다시 빌드하는 플러그인
        new webpack.HotModuleReplacementPlugin(),
    ],
    // JS 파일 압축 플러그인
    optimization: {
        minimize: true,
        minimizer: [
            new TerserWebpackPlugin({
                parallel: true,
            }),
        ],
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        hot: true, // Enable HMR
    },
    // 캐시 설정
    cache: {
        type: 'filesystem', // Enable Webpack filesystem caching
    },
};
