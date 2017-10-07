'use strict';

/**
 * @ngdoc overview
 * @name triptychApp
 * @description
 * # triptychApp
 *
 * Main module of the application.
 */


angular
  .module('triptychApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/display', {
        templateUrl: 'views/display.html',
        controller: 'DisplayCtrl',
        controllerAs: 'display'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.hashPrefix('');
  });
