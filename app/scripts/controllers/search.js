'use strict';

angular.module('corsaneApp')
	.controller('SearchCtrl', function($scope, $log, $resource, DataService, $sce, $location) {

		$scope.selected = null;

		$scope.showResource = function(item) {
			$log.info(item.id);
			$scope.selected = item;
			$scope.selected.url = $sce.trustAsResourceUrl(item.url);

		}

		var term = DataService.get();
		$log.info('It came through!' + term);
		var Res = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/resources/' + term, {
			id: '@id'
		}, {});

		$scope.resources = Res.query();

	});