'use strict';

angular.module('corsaneApp')
  .service('CorsaneService', function ($http, $log) {

  	this.getResource = function (id) {
  		var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/resources/' + id;
  		return $http.get(url);
  	};

  });
