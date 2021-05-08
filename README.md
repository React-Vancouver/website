# React Vanocuver Website

React Vancouver is one of the biggest tech communities in Vancouver, BC.

You’re a developer who wants to learn more about React or is looking for a job, a recruiter who wants to find talent, or an entrepreneur who wishes to connect with new people? You’re in the right place.

Live website at: [reactvancouver.com](https://reactvancouver.com/)

This project is currently under development.

---

## Getting Started

### Installation

You will need `node@14.x` and `npm@6.14.x` installed globally on your machine

```bash
git clone https://github.com/React-Vancouver/website.git
cd website/
yarn  ## npm install
```

### Environment Setup

Add .env file with your own keys

```bash
$ mv .env.sample .env
# rename .env.sample to .env.local
```

Add provided keys

### Start Development Server

```bash
yarn dev
```

Once you've started the development server, open http://localhost:3000 with your browser.

### Start StoryBook

```bash
yarn storybook
```

---

## Work in progress

We're using Github Projects to keep track of issues in progress and todo's. Here is our
[Board](https://github.com/orgs/React-Vancouver/projects)

People actively working on this project: @AkimaLunar.

## Contribute

Our commitment to Open Source can be found [here](https://github.com/React-Vancouver/website).

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install the dependencies: `yarn`
5. Duplicate `.env.template` and rename it to `.env.local`.
6. Add proper store values to `.env.local`.
7. Run `yarn dev` to build and watch for code changes
8. The development branch is `project/rebrand-2.0` (this is the branch pull requests should be made against).
   On a release, `project/rebrand-2.0` branch is rebased into `production`.
