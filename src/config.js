System.config({
  defaultJSExtensions: true,
  transpiler: "babel",
  paths: {
    'angular': 'node_modules/angular/index.js',
    'babel': 'node_modules/babel-core/browser.js'
  }
});
System.import('app/components/lcbo-app/lcbo-app');
