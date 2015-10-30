# ng-systemjs-starter
Example project for L&amp;L

# Setup instructions

1. npm install angular@1.4.7 babel-core@5.8.24 systemjs@0.19.5 --save
2. Add config.js as follows

```javascript
/* global System */
System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  paths: {
    'angular': 'node_modules/angular/index.js',
    'babel': 'node_modules/babel-core/browser.js'
  }
});
```