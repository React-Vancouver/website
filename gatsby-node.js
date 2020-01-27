/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const alias = require('./config/alias');

exports.onCreateWebpackConfig = ({
    // stage,
    // rules,
    // loaders,
    // plugins,
    actions,
}) => {
    actions.setWebpackConfig({
        resolve: { alias },
    });
};
