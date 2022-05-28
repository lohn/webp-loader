#!/bin/bash

set -e

if [ "$NODE_VERSION" -ge 17 -a "$WEBPACK_VERSION" == "4.x" ]; then
  # https://stackoverflow.com/a/69746937
  export NODE_OPTIONS=--openssl-legacy-provider
fi

yarn add --dev "webpack@$WEBPACK_VERSION" && \
  npx webpack --config "test/webpack-$WEBPACK_VERSION.config.js"
