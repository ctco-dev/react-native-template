This project based on ejected [Create React Native App](https://github.com/react-community/create-react-native-app).

There is a TypeScript, storybook support.

###Development

[![Greenkeeper badge](https://badges.greenkeeper.io/ctco-dev/react-native-template.svg)](https://greenkeeper.io/)

- Run `yarn` or `npm i` to install dependencies.
- Run `npm run lint:watch` to start TSLinter in watch mode.
- Run `npm run tsc` to start TypeScript in watch mode, which will watch `src` folder and put compilation result into `compiled` folder.
- Run `npm run storybook` or `npm run packager` to start RN packager with or without storybook support.
- Run `npm run ios` or `npm run android` to run the app on device/emulator.

###Storybook

Run `adb reverse tcp:7007 tcp:7007` command so that emulator could connect to the storybook server.