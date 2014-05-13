'use strict';

angular.module('corsaneApp')
  .service('getResource', function ($resource, $http, $log) {
  	

  	var res = 'fail';
  
  	return {
  		setSearch: function(term){
  			res = term;
  			$log.info('Funker det?'+term);
  		},
  		getSearch: function(){
  			$log.info('Funker det2?');
  			return res;
  		}
  	};
  	

  });
