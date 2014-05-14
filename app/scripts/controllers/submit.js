'use strict';

angular.module('corsaneApp')
	.controller('SubmitCtrl', function($scope, DataService, $log, $http) {

		var name = '';
		var url = '';
		var testName = '';
		var testUrl = '';
		
		$scope.submit = function() {
			name = $scope.resourceName;
			url = $scope.resourceURL;
			$log.info(url);
			$log.info(name);
			var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/resources?name=' + name + '&url=' + url;
			$http.post(url).success(function(data){
				alert('Success!');
			}).error(function(error, data, status, config) {
				$log.info("It doesnt work!" + data + config);
			});
		};

	});

