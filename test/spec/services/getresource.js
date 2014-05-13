'use strict';

describe('Service: Getresource', function () {

  // load the service's module
  beforeEach(module('corsaneApp'));

  // instantiate service
  var Getresource;
  beforeEach(inject(function (_Getresource_) {
    Getresource = _Getresource_;
  }));

  it('should do something', function () {
    expect(!!Getresource).toBe(true);
  });

});
