'use strict';

angular.module('corsaneApp')
	.controller('PlaylistCtrl', function($scope, $log, $rootScope, DataService, $resource, $sce, $http, $location) {

		$scope.selected = null;

		$scope.showResource = function(item) {

			$log.info('Playlist id Test: '+item.resource_id);
			$log.info('Playlist id Test2: '+item.resource_name);

			$scope.selected = item;
			$scope.selected.name = item.resource_name;
			$log.info('Playlist id Test3: '+ $scope.selected);

			$scope.selected.url = $sce.trustAsResourceUrl(item.url);
			
		};

		$scope.removeResource = function(listElement, idx) {
			
			$http.post('http://localhost:8888/Corsane/web/app_dev.php/api/lists/removelistelements?listElementId='+ listElement.list_element_id + '&listId=' + playlistId).success(function(data) {
				$scope.resources.splice(idx, 1);
				$scope.showResource($scope.resources[0]);

				$log.info('It worked!' + data);
			}).error(function(error, data, status, config) {
				$log.info('It doesnt work!' + data + config);
			});
		};

		var playlistId = DataService.get();
		
		var getElements = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/lists/elementsinlist?listId='+ playlistId, {
			id: '@id'
		}, {});

		$scope.resources = getElements.query();
		$log.info('Test: ' + $scope.resources);

	});

