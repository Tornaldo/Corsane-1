'use strict';

// Playlist controller
angular.module('corsaneApp')
	.controller('PlaylistCtrl', function($scope, $log, $rootScope, DataService, $resource, $sce, $http, $location) {

		// Variable for holding a resource. Triggers ng-show if not null.
		$scope.selected = null;

		// Function that gets called when a resource is clicked.
		$scope.showResource = function(item) {

			$log.info('Playlist id Test: '+item.resource_id);
			$log.info('Playlist id Test2: '+item.resource_name);

			// Assign a resource to selected variable.
			$scope.selected = item;
			$scope.selected.name = item.resource_name;
			$log.info('Playlist id Test3: '+ $scope.selected);

			// Makes sure url is trustworthy.
			$scope.selected.url = $sce.trustAsResourceUrl(item.url);
			
		};

		// Gets called when a resource is removed from a list.
		$scope.removeResource = function(listElement, idx) {
			
			// Deletes resource from list
			$http.post('http://localhost:8888/Corsane/web/app_dev.php/api/lists/removelistelements?listElementId='+ listElement.list_element_id + '&listId=' + playlistId).success(function(data) {
				$scope.resources.splice(idx, 1);
				$scope.showResource($scope.resources[0]);

				$log.info('It worked!' + data);
			}).error(function(error, data, status, config) {
				$log.info('It doesnt work!' + data + config);
			});
		};

		// Gets playlist ID which is passed from navbar controller via DataService.
		var playlistId = DataService.get();
		
		// Get all resources in a playlist.
		var getElements = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/lists/elementsinlist?listId='+ playlistId, {
			id: '@id'
		}, {});

		// Parse and assign resources to resources-array.
		$scope.resources = getElements.query();
		$log.info('Test: ' + $scope.resources);

	});

