'use strict';

angular.module('corsaneApp')
	.controller('SubmitCtrl', function($scope, getResource, $log, $http) {

		var name = '';
		
		$scope.submit = function() {
			name = $scope.resourceName;
			var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/resources?name=' + name;
			$http.post(url).success(function(data){
				alert('Success!');
			}).error(function(error, data, status, config) {
				$log.info("It doesnt work!" + data + config);
			});
		};

	});

