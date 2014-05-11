'use strict';

angular.module('corsaneApp')
  .controller('SearchCtrl', function ($scope, $log, CorsaneService) {
    $scope.things = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'SitePoint'
    ];
    $scope.$log = $log;
  	$scope.message = 'Hello World!';

    $scope.getResource = function(id) {
      CorsaneService.getResource(id)
        .success(function(data){
          $log.info(data);
          $scope.resource = data.resource[0];
          $log.info(data);
        })
        .error(function(error){
          $log.info("No resource here!");
          $scope.status = 'unable to load resources' + error.message;
        });
    };

  });
