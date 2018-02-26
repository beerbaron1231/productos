/*jshint unused: vars */
define(['angular', 'controllers/home', 'controllers/admin', 'services/auth']/*deps*/, function (angular, HomeCtrl, AdminCtrl, AuthFactory)/*invoke*/ {
  'use strict';

  /**
   * @ngdoc overview
   * @name paginaApp
   * @description
   * # paginaApp
   *
   * Main module of the application.
   */
  return angular
    .module('paginaApp', ['paginaApp.controllers.HomeCtrl',
'paginaApp.controllers.AdminCtrl',
'paginaApp.services.Auth',
/*angJSDeps*/'ngCookies','ngResource','ngSanitize','ngRoute','ngAnimate','ngTouch'])
       

  .config(function ($routeProvider, $locationProvider) {
      $routeProvider

        .when('/home', {
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home',
          
        })
        .when('/admin', {
          templateUrl: 'views/admin.html',
          controller: 'AdminCtrl',
          controllerAs: 'admin'
        })
        .otherwise({
          redirectTo: '/home'
        });
        $locationProvider.hashPrefix('');
        
    })


});
