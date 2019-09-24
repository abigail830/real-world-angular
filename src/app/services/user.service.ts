import { Injectable } from '@angular/core';
import { ApiService } from '../util/api.service';
import { UserCredentials } from '../models/user-credentials.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private apiService: ApiService) { }

  login(userCredentials: UserCredentials): Observable<User> {
    return this.apiService.post('/users/login', {user: userCredentials})
    .pipe(map(data => {
      return data;
    }));
  }
}
