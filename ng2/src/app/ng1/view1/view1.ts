'use strict';
const MODULE_NAME = 'viewModule';
import * as angular from 'angular';

angular.module(MODULE_NAME, ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

export default MODULE_NAME;
