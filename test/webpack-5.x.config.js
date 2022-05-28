const path = require('path');

module.exports = [
  {
    mode: 'development',
    entry: './test/app.js',
    output: {
      path: path.resolve('test/results'),
      filename: 'app.[fullhash].js',
    },
    module: {
      rules: [
        {
          test: /\.(png|jpe?g)$/i,
          resourceQuery: /webp/,
          type: 'asset/resource',
          generator: {
            filename: '[name].[hash][ext].webp',
          },
          loader: './index.js',
          options: {
            quality: 50,
          },
        },
      ],
    },
  },
];
