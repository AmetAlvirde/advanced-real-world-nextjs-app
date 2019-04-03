# Advanced real world Nextjs app

This is an advanced version of [dead-simple-real-world-app][1], if you are just
getting started, I highly recommend you to start there. Then, when you feel
comfortable, get back here.

But if you are looking for a starter kit that is not just the barebones for a
real world app, this is for you.

## What's inside:

- Everything included on the [dead simple][1] version
- A styling theme
- A more deep integration between material-ui JSS and styled components
- A more complex container/functional components react architecture
- Styled, out of the box. I'm not a designer, buy it's pretty decent
- Loaders integration
- Notifications via snackbars
- Form Validation (Through custom hooks)

## Let's code!

1. Clone this repository
2. `npm install`

#### For development

3. `npm run dev`

#### For production

3. `npm run build`
4. `npm run start`

## Pre-requisites:

### To integrate code styleguide and prettier with VSCode:

- Install [Eslint][2] and [Prettier][3] extensions
- Add to your VSCode configuration (Ctrl+,):

```javascript
  {
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "prettier.eslintIntegration": true
  }
```

### To successfully integrate Husky and get pre-commit hooks working:

For Husky to run properly, a git repository must exists before running
dependencies installation, as git hooks are configured during this process
(no matter if you use npm or yarn). If it's not the case, just reinstall
Husky for it to set its git hooks.

### What's to come:

- Icon Component for SVG icons integration
- Tests
- Progressive Web App

[1]: https://github.com/AmetAlvirde/dead-simple-real-world-nextjs-app
[2]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[3]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
