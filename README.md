# electron-boilerplate

This is a fork of the electron boilerplate https://github.com/szwacz/electron-boilerplate.git to show a problem with electron and steam on linux.

## Working App with electron 8.2.0

Make sure you have [Node.js](https://nodejs.org) installed, then type...

```
git clone git@github.com:bmsuseluda/electron-boilerplate.git
cd electron-boilerplate
npm install
npm run release
```

Add dist/linux-unpacked/electron-boilerplate as a non steam game and start

## Not Working App with electron version greater than 8

With electron version greater than 8 the app still works on linux natively but does not work via steam as a non steam game.

> INFO: On windows it still works

```
npm install --dev electron@20.1.1
npm run release
```

Add dist/linux-unpacked/electron-boilerplate as a non steam game and start
