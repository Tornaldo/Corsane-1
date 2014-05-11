'use strict';

describe('Service: SubmitService', function () {

  // load the service's module
  beforeEach(module('corsaneApp'));

  // instantiate service
  var SubmitService;
  beforeEach(inject(function (_SubmitService_) {
    SubmitService = _SubmitService_;
  }));

  it('should do something', function () {
    expect(!!SubmitService).toBe(true);
  });

});
