/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: AdminCtrl', function () {

    // load the controller's module
    beforeEach(module('paginaApp.controllers.AdminCtrl'));

    var AdminCtrl;
    var scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      AdminCtrl = $controller('AdminCtrl', {
        $scope: scope
        // place here mocked dependencies
      });
    }));

    it('should attach a list of awesomeThings to the scope', function () {
      expect(AdminCtrl.awesomeThings.length).toBe(3);
    });
  });
});
