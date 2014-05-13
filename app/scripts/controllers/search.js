'use strict';

angular.module('corsaneApp')
  .controller('SearchCtrl', function ($scope, $log, $resource, getResource) {

    $scope.selected = null;
    
    $scope.resources = getResource.query();

    $scope.showResource = function(item){
    	$log.info(item.id);
    	$scope.selected = item;

    } 

  });
