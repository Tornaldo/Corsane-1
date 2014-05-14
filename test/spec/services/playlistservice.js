'use strict';

describe('Service: Playlistservice', function () {

  // load the service's module
  beforeEach(module('corsaneApp'));

  // instantiate service
  var Playlistservice;
  beforeEach(inject(function (_Playlistservice_) {
    Playlistservice = _Playlistservice_;
  }));

  it('should do something', function () {
    expect(!!Playlistservice).toBe(true);
  });

});
