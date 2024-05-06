import {Injectable, isDevMode} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {StateStorageService} from '../service/state-storage.service';
import {HasAnyAutorityService} from '../service/has-any-autority.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RouteAccessGuard implements CanActivate {
  constructor(
    private router: Router,
    private stateSorageService: StateStorageService,
    private hasAnyAutorityService: HasAnyAutorityService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authorities = route.data.role;
    return this.get(authorities, state.url);
  }

  get(authorithies: string[], url: string): Observable<boolean> {
    return this.hasAnyAutorityService.identity().pipe(
      map(elt => {
        if (!authorithies || authorithies.length === 0) {
          return true;
        }

        if (elt) {
          const hasAnyAuthority = this.hasAnyAutorityService.hasAnyAuthority(authorithies);
          if (hasAnyAuthority) {
            return true;
          }

          if (isDevMode()) {
            // console.error('User has not any of required authorities: ', authorities);
          }
          this.router.navigate(['404']).then();
          return false;
        }
        this.stateSorageService.storeUrl(url);
        this.router.navigate(['']).then();
        return false;
      })
    );
  }
}
