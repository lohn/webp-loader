# @m8x/webp-loader

> forked from [webp-loader](https://www.npmjs.com/package/webp-loader) v0.6.0.

[![Build Status](https://github.com/m8x/webp-loader/actions/workflows/test.yaml/badge.svg?branch=master)](https://github.com/m8x/webp-loader/actions/workflows/test.yaml)

[WebP](https://developers.google.com/speed/webp/) image loader & converter loader for Webpack.

## Install

```sh
npm install --save-dev @m8x/webp-loader
```

## Usage

Here is the example of using `@m8x/webp-loader`:

```javascript
rules: [
  {
    test: /\.(png|jpe?g)$/i,
    resourceQuery: /webp/,
    type: 'asset/resource',
    generator: {
      filename: '[name].[hash][ext].webp'
    },
    use: [
      {
        loader: '@m8x/webp-loader'
      }
    ]
  }
]
```

Unfortunately, if you wish to pass an options for internal [imagemin-webp](https://github.com/imagemin/imagemin-webp) you should pass a options in JSON form:

```javascript
rules: [
  {
    test: /\.(png|jpe?g)$/i,
    resourceQuery: /webp/,
    type: 'asset/resource',
    generator: {
      filename: '[name].[hash][ext].webp'
    },
    use: [
      {
        loader: '@m8x/webp-loader',
        options: {
          quality: 10
        }
      }
    ]
  }
]
```

## Options

For all possible options please visit "API" section of the official [imagemin-webp README](https://github.com/imagemin/imagemin-webp#imageminwebpoptions).

## Inspiration

`webp-loader` is heavily inspired by [tcoopman/image-webpack-loader](https://github.com/tcoopman/image-webpack-loader).

## License

[MIT](http://opensource.org/licenses/MIT)
