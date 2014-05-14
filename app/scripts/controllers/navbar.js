'use strict';

angular.module('corsaneApp')
	.controller('NavbarCtrl', function($scope, $log, $location, $resource, DataService) {

		$scope.search = function(term) {
			$location.path('/search').search(term);
			DataService.set(term);
			$scope.searchTerm = '';
		}
	});