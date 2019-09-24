import { TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { UserService } from './user.service';
import { UserCredentials } from '../models/user-credentials.model';
import { User } from '../models/user.model';
import { ApiService } from '../util/api.service';

describe('UserService', () => {

  it('should able to login', async () => {
    // given
    const userCredentials: UserCredentials = {
      email: 'email',
      password: 'password'
    };
    const expectUser: User = {
      email: 'email',
      username: 'username',
      token: 'token'
    };
    const apiService: ApiService = new ApiService(null);
    const service: UserService = new UserService(apiService);

    const spy = jest.spyOn(apiService, 'post');
    spy.mockReturnValue(of(expectUser));

    // when
    await service.login(userCredentials).subscribe(user => {
      expect(user).toEqual(expectUser);
    },
      fail
    );
  });

});
