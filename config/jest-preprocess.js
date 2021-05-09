const alias = require('./alias');

const babelOptions = {
  presets: ['babel-preset-gatsby', '@emotion/babel-preset-css-prop'],
  plugins: [
    [require.resolve('babel-plugin-module-resolver'), { alias }],
  ],
};

module.exports = require('babel-jest').createTransformer(babelOptions);
