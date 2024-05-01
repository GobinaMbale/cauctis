import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService, SessionStorageService} from 'ngx-webstorage';
import {LocalStorageEnum} from '../../shared/enum/local-storage.enum';
import {AuthApiService} from '../../../gs-api/src/services';
import {LoginRequest} from '../../../gs-api/src/models/login-request';

@Injectable({
  providedIn: 'root'
})
export class AuthJwtService {

  constructor(private $localStorage: LocalStorageService,
              private router: Router,
              private $sessionStorage: SessionStorageService,
              private authenticationService: AuthApiService
  ) { }

  getToken(): string {
    return this.$localStorage.retrieve(LocalStorageEnum.TOKEN) || this.$sessionStorage.retrieve(LocalStorageEnum.TOKEN) || '';
  }

  login(body: LoginRequest): void {}

  logout(): void {
    this.$localStorage.clear(LocalStorageEnum.TOKEN);
    localStorage.removeItem(LocalStorageEnum.LANGUAGE);
    this.router.navigate(['']).then();
  }

  private authenticateSuccess(response: any, rememberMe: boolean): void {
    const jwt = response.id_token;
    if (rememberMe) {
      this.$localStorage.store(LocalStorageEnum.TOKEN, jwt);
    } else {
      this.$sessionStorage.store(LocalStorageEnum.TOKEN, jwt);
    }
  }

}
