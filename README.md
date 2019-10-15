# Xpersity

## Javascript Framework

In this project we use [VueJS](https://vuejs.org/v2/guide/) as Frontend Framework.

## Source Structure

Development source code is inside `src` folder. Here the standard structure:
```
|- public
|   |- index.html
|   |_ assets (static resources that will be copy directly to dist source)
|_ src
    |- assets (static resources that can be import for using in code)
    |   |- fonts
    |   |- images
    |   |- libraries
    |   |- locale
    |   |_ scss
    |- common
    |   |- configs
    |   |- const
    |   |_ helpers
    |       |- api (axios configs, customize request params, interceptors)
    |       |- storage (localStorage, sessionStorage)
    |       |_ validators
    |- components (re-usable components)
    |- store (vuex - app global data store)
    |   |_ modules
    |- views (pages)
    |_ router.js

```

## Coding Convention

Follow [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) which is customized for better suit with VueJS. Customizations can be found in `.eslintrc.js`.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production

For staging environtment

```
npm run build:stag
```

For production environtment

```
npm run build:prod
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests
```
npm run test:unit
```

## Release version

When there's a release, make sure `version` in `package.json` is always updated with latest release version.