/* eslint-disable */
var merge = require('webpack-merge');
var path = require('path');

var commonConfig = require('./common.config.js');

var paths = require('./paths');
/* eslint-enable */

module.exports = merge.smart(
  commonConfig,
  {
    entry: [
      '@babel/polyfill',
      path.join(paths.root, 'config', 'server.js'),
    ],
    target: 'node',
    output: {
      path: path.join(paths.root, 'private'),
      filename: 'server.js',
    },
  },
  {
    module: {
      rules: [
        {
          test: /\.(svg|png)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: false,
              },
            },
          ],
        }, {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                emitFile: false,
              },
            },
          ],
        },
      ],
    },
  },
);
