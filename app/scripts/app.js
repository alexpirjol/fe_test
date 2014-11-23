'use strict';

/**
 * @ngdoc overview
 * @name feTestApp
 * @description
 * # feTestApp
 *
 * Main module of the application.
 */
var app = angular
  .module('feTestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'MainCtrl'
      })
      .when('/what-we-do', {
        templateUrl: 'views/what-we-do.html',
        controller: 'WhatWeDoCtrl'
      })
      .when('/your-rights', {
        templateUrl: 'views/your-rights.html'
      })
      .when('/abroad', {
        templateUrl: 'views/abroad.html'
      })
      .when('/comunity', {
        templateUrl: 'views/comunity.html'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });


app.controller('AppCtrl', function ($scope, $modal, $location) {
    $scope.openModal = function () {

      var modalInstance = $modal.open({
        templateUrl: 'views/modal.html',
        controller: 'contactCtrl',
        size: 'lg'
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {

      });

    };

    $scope.getClass = function(path) {
        if ($location.path().substr(0, path.length) === path) {
          return 'active';
        } else {
          return '';
        }
    };


  });

app.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
             if (this.pageYOffset > 0) {
                 scope.scrollHide = true;
                 console.log('Scrolled below header.');
             } else {
                 scope.scrollHide = false;
                 console.log('Header is in view.');
             }
            scope.$apply();
        });
    };
});