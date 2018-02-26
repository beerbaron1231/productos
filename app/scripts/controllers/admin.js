define(['angular'], function (angular) {
  'use strict';

  /**
   * @ngdoc function
   * @name paginaApp.controller:AdminCtrl
   * @description
   * # AdminCtrl
   * Controller of the paginaApp
   */
  angular.module('paginaApp.controllers.AdminCtrl', [])
    .controller('AdminCtrl', function () {
      this.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
      ];
    });
});
