import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../services/auth-service.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private auth: AuthServiceService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const infosLocaleStorages = JSON.parse(localStorage.getItem('USER_INFOS')!);

    if (infosLocaleStorages.roles.includes('ROLE_ADMIN')) {
      if (
        new Date(infosLocaleStorages.expiresAt).getTime() > new Date().getTime()
      ) {
        return true;
      } else {
        this.auth.logOut();
        return false;
      }
    } else {
      this.auth.logOut();
      return false;
    }
  }
}
