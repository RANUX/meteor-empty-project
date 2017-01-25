
## ESLint config
```bash
(   export PKG=eslint-config-airbnb-base;   npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"; )
npm install eslint-plugin-meteor --save-dev
npm i --save-dev eslint-import-resolver-meteor
```
