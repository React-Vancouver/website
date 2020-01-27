const alias = require('../config/alias');

module.exports = ({ config }) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    // Use installed babel-loader which is v8.0-beta (which is meant to work
    // with @babel/core@7)
    config.module.rules[0].use[0].loader = require.resolve('babel-loader');

    // https://github.com/emotion-js/emotion/issues/1306
    // Replace "@babel/react-preset" with "@emotion/babel-preset-css-prop"
    // to make Emotion work. See .babelrc.
    config.module.rules[0].use[0].options.presets = [
        ...config.module.rules[0].use[0].options.presets,
        require.resolve('@babel/preset-env'),
    ];

    console.log(config.module.rules[0].use[0].options.presets);

    config.module.rules[0].use[0].options.plugins = [
        // Use @babel/plugin-proposal-class-properties for class arrow functions
        require.resolve('@babel/plugin-proposal-class-properties'),
        // Use babel-plugin-remove-graphql-queries to remove static queries from
        // components when rendering in storybook
        require.resolve('babel-plugin-remove-graphql-queries'),
    ];

    // Prefer Gatsby ES6 entrypoint (module) over commonjs (main) entrypoint
    config.resolve.mainFields = ['browser', 'module', 'main'];

    config.resolve.alias = {
        ...config.resolve.alias,
        ...alias,
    };

    return config;
};
