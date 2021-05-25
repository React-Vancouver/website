const alias = require('../config/alias');
const { merge } = require('webpack-merge');
const path = require('path');
const fs = require('fs');

// Fix breaking name change for emotion11
// Storybook internally is still looking for v10 names to integrate emotion packkages
// https://stackoverflow.com/questions/65894711/module-not-found-error-cant-resolve-emotion-styled-base-when-running-story
function getPackageDir(filepath) {
  let currDir = path.dirname(require.resolve(filepath));
  while (true) {
    if (fs.existsSync(path.join(currDir, 'package.json'))) {
      return currDir;
    }
    const { dir, root } = path.parse(currDir);
    if (dir === root) {
      throw new Error(
        `Could not find package.json in the parent directories starting from ${filepath}.`
      );
    }
    currDir = dir;
  }
}

module.exports = ({ config }) => {
  // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

  // Use installed babel-loader which is v8.0-beta (which is meant to work
  // with @babel/core@7)
  config.module.rules[0].use[0].loader = require.resolve('babel-loader');

  // use @babel/preset-react for JSX and env (instead of staged presets)
  config.module.rules[0].use[0].options.presets = [
    require.resolve('@babel/preset-react'),
    require.resolve('@babel/preset-env'),
    require.resolve('babel-preset-gatsby'),
    require.resolve('@emotion/babel-preset-css-prop'),
  ];

  config.module.rules[0].use[0].options.plugins = [
    // Use babel-plugin-remove-graphql-queries to remove static queries from
    // components when rendering in storybook
    require.resolve('babel-plugin-remove-graphql-queries'),
  ];

  // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
  config.resolve.mainFields = ['browser', 'module', 'main'];

  config.resolve.alias = {
    ...config.resolve.alias,
    ...alias,
    '@emotion/core': getPackageDir('@emotion/react'),
    '@emotion/styled': getPackageDir('@emotion/styled'),
    'emotion-theming': getPackageDir('@emotion/react'),
  };

  return config;
};

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../components/**/*.stories.@(ts|tsx|mdx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config) => {
    config.resolve.alias = {
      '@emotion/core': getPackageDir('@emotion/react'),
      '@emotion/styled': getPackageDir('@emotion/styled'),
      'emotion-theming': getPackageDir('@emotion/react'),
    };
    return config;
  },
};
