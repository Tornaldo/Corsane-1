'use strict';

angular.module('corsaneApp')
	.controller('SidebarCtrl', function($rootScope, $scope, $log, $resource, DataService, $location) {
		$rootScope.defaultLists = [{
			name: 'Angular 101',
			resources: []
		}, {
			name: 'Calculus',
			resources: []
		}];
		$scope.addPlaylist = function() {
			this.defaultLists.push({
				name: 'Untitled list',
				resources: []
			});
		};

		var getLists = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/lists', {
			id: '@id'
		}, {});

		$rootScope.lists = getLists.query();

		$scope.passPlaylist = function(playlist) {
			$location.path('/playlist').search(playlist.name);
			DataService.set(playlist.id);
			$log.info('SidebarTest: '+ playlist.id);
		}

	});
