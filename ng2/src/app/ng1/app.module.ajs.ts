'use strict';

import * as angular from 'angular';
import 'angular-route';
import moduleName from './view1/view1'; 

const MODULE_NAME = 'app';
// Declare app level module which depends on views, and components
angular.module(MODULE_NAME, [
  'ngRoute',
  moduleName,
  //'myApp.view2',
  //'myApp.view3',
  //'myApp.view4',
  //'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

export default MODULE_NAME;