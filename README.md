## Install
```bash

cd soctodo
meteor npm install
bower install
meteor
```

## Run project
```bash
npm start
```

## ESLint config
```bash
(   export PKG=eslint-config-airbnb-base;   npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"; )
npm install eslint-plugin-meteor --save-dev
npm i --save-dev eslint-import-resolver-meteor
```

## Fork Atom settings
Install
```
$ apm install sync-settings or using the Install packages pane from Atom Settings.
```
You can also fork existing settings from a different GitHub user using the following command:
sync-settings:fork

In the following input field enter the Gist ID to fork:
0908dbd3ad31a5861adcafd739a163ba
