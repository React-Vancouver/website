# Contributing
Thank you for contributing to ReactVancouver open source projects!

## Choosing an issue

If you do know what you want to contribute…_
Create an issue using a template:
- Feature: if you want to implement something new.
- Bug: if you want to fix something broken.
💡TIP: Get feedback from the core maintainers and / or community before jumping into code.

_If you don’t know what you want to contribute…_
Look at the open [issues](https://github.com/React-Vancouver/website/issues). If you are just starting out, look for _good first issue_ tags. Comment on the issue to discuss the implementation plan or reach out to core maintainers on Slack.

## Setting Up

#### 1. Get the code
You will need `node@14.x` and `npm@6.14.x` installed globally on your machine

```bash
git clone https://github.com/React-Vancouver/website.git
cd website/
yarn
```

#### 2. Create environment files

Add `.env.production` and `.env.development` file with your own keys.

```bash
$ mv .env.sample .env.production
$ mv .env.sample .env.development
```

Ask core maintainers for the keys 🔑.

#### 3. Start Development Server

**Gatsby**
```bash
yarn start
```

- You can now view `react-vancouver-website` in the browser. http://localhost:8000/
- View GraphiQL, an in-browser IDE, to explore your site’s data and schema. http://localhost:8000/___graphql

**Storybook**
```bash
yarn storybook
```

---

## Working on issues
1. Create a new branch for your work:
  1.1 off `project` branch if you are contributing to a larger project,
  1.2 off `production` if you are contributing an individual feature or fix.
2. The naming convention for branches is `[feature|fix]/[issue-number]/[issue-name]` (eg `feature/3/add-readme`)

```bash
git checkout -b feature/3/add-readme
yarn && yarn start
```

## Pull Request Process
1. Open a PR against a project or production branch  depending on what you were working on.
2. Get at least one review.
3. You may merge the Pull Request in once you have the sign-off from a core maintainer (see `CODEOWNERS`).

If you were working on a project, the project branch will be merged into `production` when it is complete and ready for release.
