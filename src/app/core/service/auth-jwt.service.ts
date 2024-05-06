import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
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

  constructor(private $localStorage: LocalStorageService,
              private router: Router,
              private $sessionStorage: SessionStorageService,
              private authenticationService: AuthApiService,
  ) { }

  getToken(): string {
    return this.$localStorage.retrieve(LocalStorageEnum.TOKEN) || this.$sessionStorage.retrieve(LocalStorageEnum.TOKEN) || '';
  }

  login(body: LoginRequest): Observable<void> {
    return this.authenticationService.authenticateUser(body).
    pipe(map(res => this.authenticateSuccess(res)));
  }

  logout(): void {
    this.$localStorage.clear(LocalStorageEnum.TOKEN);
    localStorage.removeItem(LocalStorageEnum.LANGUAGE);
    this.router.navigate(['']).then();
  }

  private authenticateSuccess(response: JwtAuthenticationResponse): void {
    const jwt = response.accessToken;
    const data = response.data;
    this.$localStorage.store(LocalStorageEnum.TOKEN, jwt);
    this.$localStorage.store(LocalStorageEnum.DATA_USER, data);
  }

}
