#!/bin/bash

set -e

yarn add --dev "webpack@$WEBPACK_VERSION" && \
  npx webpack --config "test/webpack-$WEBPACK_VERSION.config.js"
