'use strict';

// Search Controller
angular.module('corsaneApp')
	.controller('SearchCtrl', function($rootScope, $scope, $log, $resource, DataService, $sce, $location, $http) {

		// Variable for holding a resource. Triggers ng-show if not null.
		$scope.selected = null;

		// Function that gets called when a resource is clicked.
		$scope.showResource = function(item) {
			$log.info(item.url);

			// Assign a resource to selected variable.
			$scope.selected = item;
			// Makes sure url is trustworthy.
			$scope.selected.url = $sce.trustAsResourceUrl(item.url);

		};

		// Gets playlist ID which is passed from navbar controller via DataService.
		var term = DataService.get();
		$log.info('It came through!' + term);

		// Get all resources in a playlist.
		var Res = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/resources/' + term, {
			id: '@id'
		}, {});

		// Parse and assign resources to resources-array.
		$scope.resources = Res.query();

		// When clicked, this function adds the given resource to this playlist.
		$scope.addToList = function(playlist){

			$log.info('Playlist ID: ' +playlist.id);

			// Post a resource to a list
			var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/lists/addlistelements?elementId=' + $scope.selected.id + '&listId=' + playlist.id + '&type=resource';
			$http.post(url).success(function(data){
				alert('Success!');
			}).error(function(error, data, status, config) {
				$log.info("It doesnt work!" + data + config);
			});
		};
	});

