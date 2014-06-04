'use strict';

// Sidebar controller
angular.module('corsaneApp')
	.controller('SidebarCtrl', function($rootScope, $scope, $log, $resource, DataService, $location, $http) {
		
		// Function for adding new playlists. 
		$scope.addPlaylist = function() {
			$http.post('http://localhost:8888/Corsane/web/app_dev.php/api/lists/addlists?name=TestList').success(function(data) {
				$rootScope.lists.push(data);
				$log.info('It worked!' + data);
			}).error(function(error, data, status, config) {
				$log.info('It doesnt work!' + data + config);
			});

		};

		// Get all the playlists.
		var getLists = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/lists', {
			id: '@id'
		}, {});

		// Parse playlists into lists array.
		$rootScope.lists = getLists.query();

		// When playlist is selected in sidebar, this function passes the list id to the playlist controller.
		$scope.passPlaylist = function(playlist) {
			// Switch to playlist view
			$location.path('/playlist').search(playlist.name);

			// Passing id
			DataService.set(playlist.id);
			$log.info('SidebarTest: ' + playlist.id);
		};

	});