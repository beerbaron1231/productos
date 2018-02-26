define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc service
   * @name paginaApp.Auth
   * @description
   * # Auth
   * Factory in the paginaApp.
   */
  angular.module('paginaApp.services.Auth', ['firebase'])
    .factory('Auth', ['$firebaseAuth' , function ($firebaseAuth) {
      // Service logic
      // ...
      
         // return $firebaseAuth();
        
      
    }]);
});
