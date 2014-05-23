'use strict';

angular.module('corsaneApp')
	.controller('SidebarCtrl', function($rootScope, $scope, $log, $resource, DataService, $location, $http) {
		$rootScope.defaultLists = [{
			name: 'Angular 101',
			resources: []
		}, {
			name: 'Calculus',
			resources: []
		}];
		$scope.addPlaylist = function() {
			$http.post('http://localhost:8888/Corsane/web/app_dev.php/api/lists/addlists?name=TestList').success(function(data) {
				$rootScope.lists.push(data);
				$log.info('It worked!' + data);
			}).error(function(error, data, status, config) {
				$log.info('It doesnt work!' + data + config);
			});

		};

		var getLists = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/lists', {
			id: '@id'
		}, {});

		$rootScope.lists = getLists.query();

		$scope.passPlaylist = function(playlist) {
			$location.path('/playlist').search(playlist.name);
			DataService.set(playlist.id);
			$log.info('SidebarTest: ' + playlist.id);
		};

	});