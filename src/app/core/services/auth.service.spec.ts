import {async, TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClientTestingBackend} from '@angular/common/http/testing/src/backend';

import {AuthService} from './auth.service';

describe('AuthService', () => {
  let backend: HttpClientTestingBackend;
  let service: AuthService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        AuthService
      ]
    }).compileComponents().then(() => {
      service = TestBed.get(AuthService);
      backend = TestBed.get(HttpTestingController);
    });
  }));

  afterEach(() => {
    backend.verify();
    localStorage.clear();
  });

  it('initial failedLoginAttempts should be 0', async(() => {
    expect(service.getFailedLoginAttempts()).toBe(0);
  }));

  it('user should not be loggedIn', async(() => {
    expect(service.isLoggedIn()).toBeFalsy();
  }));

  it('should login the user', async(() => {
    const token = 'tset_token';
    const expiresIn = 18318239183;
    const a = {'token': token, 'expiresIn': expiresIn};

    service.login({username: 'test', password: 'test'}).subscribe(data => {
      expect(data).toBe(a);
      expect(localStorage.getItem('id_token')).toBe(token);
      expect(service.getFailedLoginAttempts()).toBe(0);
      expect(service.isLoggedIn()).toBeTruthy();
    });

    const req = backend.expectOne(request => {
      return request.method === 'POST' && request.url.includes('/token/generate-token');
    });

    req.flush(a);
  }));

});
