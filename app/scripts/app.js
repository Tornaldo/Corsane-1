'use strict';

// This is the main js-file where the module corsaneApp is initialized.
angular
  .module('corsaneApp', [ // This is all the external angular directives we are using
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'ui.bootstrap',
    'ngAnimate'

  ]) // This shows what html file and controller to load when a url is specified.
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl'
      })

      .when('/search', {
        templateUrl : 'views/search.html',
        controller  : 'SearchCtrl'
      })

      .when('/submit', {
        templateUrl : 'views/submit.html',
        controller  : 'SubmitCtrl'
      })

      .when('/playlist', {
        templateUrl : 'views/playlist.html',
        controller  : 'PlaylistCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  });
