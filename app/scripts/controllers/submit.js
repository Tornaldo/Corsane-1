'use strict';

// Submit controller
angular.module('corsaneApp')
	.controller('SubmitCtrl', function($scope, DataService, $log, $http) {

		var name = '';
		var url = '';
		var testName = '';
		var testUrl = '';
		
		// Submits a resource when button is clicked
		$scope.submit = function() {
			name = $scope.resourceName;
			url = $scope.resourceURL;
			$log.info(url);
			$log.info(name);
			var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/resources?name=' + name + '&url=' + url;
			
			// Post resource
			$http.post(url).success(function(data){
				alert('Success!');
			}).error(function(error, data, status, config) {
				$log.info("It doesnt work!" + data + config);
			});
		};
		
		// Tab Control
		this.tab = 1;
		
		this.setTab = function(tab) {
			this.tab = tab;
		};
		
		this.isSet = function(checkTab) {
			return this.tab === checkTab;
		};
	});
