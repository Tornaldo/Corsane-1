'use strict';

angular.module('corsaneApp')
	.controller('NavbarCtrl', function($scope, $log, $location, $resource, getResource) {

		$scope.search = function(term) {
			$location.path('/search').search(term);
			getResource.setSearch(term);
			$scope.searchTerm = '';
		}
	});