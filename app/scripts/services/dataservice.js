'use strict';

angular.module('corsaneApp')
  .service('DataService', function ($log) {
  	

  	var res = 'fail';
  
  	return {
  		set: function(term){
  			res = term;
  			$log.info('Funker det?'+term);
  		},
  		get: function(){
  			$log.info('Funker det2?');
  			return res;
  		}
  	};
  	

  });
