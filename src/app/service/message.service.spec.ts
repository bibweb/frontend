import {TestBed} from '@angular/core/testing';

import {MessageService} from './message.service';

describe('MessageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessageService = TestBed.get(MessageService);
    expect(service).toBeTruthy();
  });

  it('should save status of error 0', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.addError({status: 0});
    expect(service.getLastError()).toBe("0");
  });

  it('should save status of error 404', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.addError({status: 404});
    expect(service.getLastError()).toBe("404");
  });

  it('should be able to remove errors', () => {
    const service: MessageService = TestBed.get(MessageService);
    service.addError("JasmineError");
    service.removeError();
    expect(service.getLastError()).toBe(null);
  });

});
