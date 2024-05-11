import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageEnum} from '../../shared/enums/local-storage.enum';
import {AuthApiService} from '../../../gs-api/src/services';
import {LoginRequest} from '../../../gs-api/src/models/login-request';
import {Observable} from 'rxjs';
import {JwtAuthenticationResponse} from '../../../gs-api/src/models/jwt-authentication-response';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(private router: Router,
              private authenticationService: AuthApiService,
  ) { }

  login(body: LoginRequest): Observable<void> {
    return this.authenticationService.authenticateUser(body).
    pipe(map(res => this.authenticateSuccess(res)));
  }

  logout(): void {
    localStorage.removeItem(LocalStorageEnum.TOKEN);
    localStorage.removeItem(LocalStorageEnum.DATA_USER);
    localStorage.removeItem(LocalStorageEnum.LANGUAGE);
    this.router.navigate(['']).then();
  }

  private authenticateSuccess(response: JwtAuthenticationResponse): void {
    localStorage.setItem(LocalStorageEnum.TOKEN, response.accessToken);
    localStorage.setItem(LocalStorageEnum.DATA_USER, JSON.stringify(response.data));
  }

}
