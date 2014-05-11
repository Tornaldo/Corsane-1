'use strict';

angular.module('corsaneApp')
  .controller('HelloCtrl', function ($scope, $http) {
    $http.get('http://rest-service.guides.spring.io/greeting').
        success(function(data) {
            $scope.greeting = data;
        });
  });

