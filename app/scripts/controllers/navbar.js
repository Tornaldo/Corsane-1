'use strict';

// Navigation bar controller

angular.module('corsaneApp')
	.controller('NavbarCtrl', function($scope, $log, $location, $resource, DataService) {

		// This function redirects to the search view, passing the search term to DataService.
		$scope.search = function(term) {
			$location.path('/search').search(term);
			DataService.set(term);
			$scope.searchTerm = '';
		};
	});