'use strict';

angular.module('corsaneApp')
	.controller('SearchCtrl', function($rootScope, $scope, $log, $resource, DataService, $sce, $location, $http) {

		$scope.selected = null;

		$scope.showResource = function(item) {
			$log.info(item.url);
			$scope.selected = item;
			$scope.selected.url = $sce.trustAsResourceUrl(item.url);

		};

		var term = DataService.get();
		$log.info('It came through!' + term);
		var Res = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/resources/' + term, {
			id: '@id'
		}, {});

		$scope.resources = Res.query();

		$scope.addToList = function(playlist){
			$log.info('Playlist ID: ' +playlist.id);
			var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/lists/addlistelements?elementId=' + $scope.selected.id + '&listId=' + playlist.id + '&type=resource';
			$http.post(url).success(function(data){
				alert('Success!');
			}).error(function(error, data, status, config) {
				$log.info("It doesnt work!" + data + config);
			});
		};
	});

