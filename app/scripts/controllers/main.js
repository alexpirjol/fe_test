'use strict';

/**
 * @ngdoc function
 * @name feTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the feTestApp
 */
angular.module('feTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.selected = 's1';
    $scope.select= function(id) {
       $scope.selected = id; 
    };

  });
