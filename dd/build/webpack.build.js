const path = require("path");
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base')
const resolve = filePath => path.resolve(__dirname, filePath)

const pkg = require('../package.json')

const env = process.env.ENV
const config = {
    mode: 'production',
    target: env,
    entry: [
        resolve('../src/index.ts'),
    ],
    output: {
        path: resolve('../dist'),
        filename: `${pkg.name}.js`,
        library: pkg.name,
        libraryTarget: 'umd'
    },
}

module.exports = merge(baseConfig, config)