'use strict';

describe('Service: Corsaneservice', function () {

  // load the service's module
  beforeEach(module('corsaneApp'));

  // instantiate service
  var Corsaneservice;
  beforeEach(inject(function (_Corsaneservice_) {
    Corsaneservice = _Corsaneservice_;
  }));

  it('should do something', function () {
    expect(!!Corsaneservice).toBe(true);
  });

});
