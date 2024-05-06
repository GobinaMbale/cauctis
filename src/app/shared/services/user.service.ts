import { Injectable } from '@angular/core';
import {UserApiService} from '../../../gs-api/src/services';
import {UserRequest} from '../../../gs-api/src/models/user-request';
import {Observable} from 'rxjs';
import {SignUpRequest} from '../../../gs-api/src/models/sign-up-request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private userApiService: UserApiService) { }

  register(body: SignUpRequest): Observable<UserRequest> {
    return this.register(body);
  }
}
