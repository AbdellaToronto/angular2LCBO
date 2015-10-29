'use strict';

import {SomeClass} from './file';
import angular from 'angular';

angular.module('ngcourse', []) 
  .run(() => {
    let x = new SomeClass('Hello Rangle!');
    x.print();
  });

angular.element(document).ready(function() {
  angular.bootstrap(document, ['ngcourse']);
});