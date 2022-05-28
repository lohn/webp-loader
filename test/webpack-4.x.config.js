const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './test/app.js',
    output: {
      path: path.resolve('test/results'),
      filename: 'app.[hash].js',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/i,
          resourceQuery: /webp/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[hash].[ext].webp',
              },
            },
            {
              loader: './index.js',
              options: {
                quality: 50,
              },
            },
          ],
        },
      ],
    },
  },
];
