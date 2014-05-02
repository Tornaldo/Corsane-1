'use strict';

angular
  .module('corsaneApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate'

  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/index.html',
        controller: 'MainCtrl'
      })

      .when('/search', {
        templateUrl : 'views/search.html',
        controller  : 'SearchCtrl'
      })

      .when('/submit', {
        templateUrl : 'views/submit.html',
        controller  : 'SubmitCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });
  });
