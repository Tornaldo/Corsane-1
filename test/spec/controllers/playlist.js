'use strict';

describe('Controller: PlaylistctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('corsaneApp'));

  var PlaylistctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlaylistctrlCtrl = $controller('PlaylistctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
