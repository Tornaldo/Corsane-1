'use strict';

angular.module('corsaneApp')
  .service('getResource', function ($resource, $http) {
  	var Res = $resource('http://localhost:8888/Corsane/web/app_dev.php/api/resources/:id', { id: '@id' },{});
  	return Res;
  	// this.postResource = function(resource){
  	// 	var url = 'http://localhost:8888/Corsane/web/app_dev.php/api/resources';
  	// 	return $http.post(url, resource);
  	// }

  });
