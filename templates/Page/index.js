module.exports = {
  description: 'Generate a Page.',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name now, please!',
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/pages/{{dashCase name}}.js',
      templateFile: 'templates/Page/page.hbs',
    },
    {
      type: 'add',
      path: 'src/utilities/content/{{dashCase name}}.js',
      templateFile: 'templates/Page/content.hbs',
    },
    {
      type: 'append',
      path: 'src/utilities/content/index.js',
      pattern: '/* PLOP_INJECT_FORMATTER */',
      template: `export { default as format{{pascalCase name}} } from './{{dashCase name}}';`,
    },
  ],
};
