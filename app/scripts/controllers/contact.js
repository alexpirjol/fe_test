'use strict';

angular.module('feTestApp')
    .controller('contactCtrl',  function($scope, $modalInstance){
        $scope.ok = function () {
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };

    });