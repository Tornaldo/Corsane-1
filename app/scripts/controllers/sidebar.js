'use strict';

angular.module('corsaneApp')
	.controller('SidebarCtrl', function($scope, DataService) {
		$scope.defaultLists = [{
			name: 'Angular 101',
			resources: {}
		}, {
			name: 'Calculus',
			resources: {}
		}];
		$scope.addPlaylist = function() {
			this.defaultLists.push({
				name: 'Untitled list',
				resources: {}
			});
		};
		$scope.passList = function(item) {
			DataService.set(item);
		};

	});