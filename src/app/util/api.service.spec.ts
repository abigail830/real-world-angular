import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { UserCredentials } from '../models/user-credentials.model';
import { User } from '../models/user.model';

xdescribe('Test ApiService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiService: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    // Inject the http service and test controller for each test
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    apiService = TestBed.get(ApiService);
  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });

  describe('Test of HTTP Get', () => {
    beforeEach(() => {
      apiService = TestBed.get(ApiService);
    });

    it('test http get', () => {
      // given
      const expectUser: User = {
        username: 'username',
        token: 'token',
        email: 'email'
      };
      const userCredentials: UserCredentials = {
        email: 'abigail830@126.com',
        password: '!QAZ@WSX'
      };

      // when
      apiService.get('/url', userCredentials).subscribe(user => {
        expect(user).toEqual(expectUser);
        fail('Fail');
      });

      // then
      const req = httpTestingController.expectOne('http://conduit.productionready.io/api/url');
      // Assert that the request is a GET.
      expect(req.request.method).toEqual('GET');
      // Respond with mock data, causing Observable to resolve.
      // Subscribe callback asserts that correct data was returned.
      req.flush(expectUser);

    });
  });
});
