'use strict';

describe('Directive: searchModule', function () {

  // load the directive's module
  beforeEach(module('corsaneApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<search-module></search-module>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the searchModule directive');
  }));
});
