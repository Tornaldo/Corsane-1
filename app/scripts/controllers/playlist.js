'use strict';

angular.module('corsaneApp')
	.controller('PlaylistCtrl', function($scope) {
		$scope.defaultLists = [{
			name: 'Angular 101'
		}, {
			name: 'Calculus'
		}];
		$scope.addPlaylist = function() {
			this.defaultLists.push({
				name: 'untitled list'
			});
		}
	});

