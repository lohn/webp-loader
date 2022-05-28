/** @type {import("webpack").LoaderDefinitionFunction} */
module.exports = function (content) {
  this.async();
  import('./index.mjs').then((loader) => loader.default.call(this, content));
};

module.exports.raw = true;
