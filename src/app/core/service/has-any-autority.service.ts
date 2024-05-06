import { Injectable } from '@angular/core';
import {StateStorageService} from './state-storage.service';
import {Router} from '@angular/router';
import {AuthApiService} from '../../../gs-api/src/services';
import {Observable, of, ReplaySubject} from 'rxjs';
import {SignUpRequest} from '../../../gs-api/src/models/sign-up-request';
import {catchError, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HasAnyAutorityService {
  userIdentity: SignUpRequest;
  private authenticationState = new ReplaySubject<SignUpRequest | null>(1);
  private $currentUserCache?: Observable<SignUpRequest | null>;
  authotiriesList: string[];

  constructor(
    private stateStorageService: StateStorageService,
    private authApiService: AuthApiService,
    private router: Router
  ) { }

  authenticate(identity: any | null): void {
    this.userIdentity = identity;
    this.authenticationState.next(this.userIdentity);
  }

  identity(force?: boolean): Observable<SignUpRequest | null> {
    if (!this.$currentUserCache || force || !this.isAuthenticated()) {
      this.$currentUserCache = this.getCurrentUser().pipe(
        catchError(() => of(null)),
        tap((user: SignUpRequest | null) => {
          this.authenticate(user);
          if (user) {
            this.navigateToStoredUrl();
          }
        }),
        shareReplay()
      );
      return this.$currentUserCache;
    }
  }

  hasAnyAuthority(authorithies: string[] | string): boolean {
    if (!Array.isArray(authorithies)) {
      authorithies = [authorithies];
    }
    this.userIdentity.profiles.forEach((authority) => {
      this.authotiriesList.push(authority.profile.name);
    });
    return this.authotiriesList.every(elt => authorithies.includes(elt));
  }

  private isAuthenticated(): boolean {
    return this.userIdentity !== null;
  }

  getCurrentUser(): Observable<SignUpRequest> {
    return this.authApiService.getCurrentUser();
  }

  private navigateToStoredUrl(): void {
    // previousState can be set in the authExpiredInterceptor and in the userRouteAccessService
    // if login is successful, go to stored previousState and clear previousState
    const previousUrl = this.stateStorageService.getUrl();
    if (previousUrl) {
      this.stateStorageService.clearUrl();
      this.router.navigateByUrl(previousUrl).then();
    }
  }
}
