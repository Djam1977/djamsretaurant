// import { Injectable } from '@angular/core';
// import {
//   ActivatedRouteSnapshot,
//   CanActivate,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuardGuard implements CanActivate {
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     return true;
//   }
// }
 //     let userInfos = this.authService.loadUserFromLocalStorage();
  //     if (route.data['userType'] === 'Admin') {
  //       if (
  //         this.authService.isLoggedIn() &&
  //         (userInfos.roles.includes('ROLE_ADMIN'))
  //       ) {
  //         return true;
  //       }
  //       this.router.navigate(['/']);
  //       return false;
  //     } else if (route.data['userType'] === 'visitorOnly') {
  //       if (!this.authService.isLoggedIn()) {
  //         return true;
  //       }
  //       this.router.navigate(['/']);
  //       return false;
  //     }  else if (route.data['userType'] === 'admin') {
  //       if (
  //         this.authService.isLoggedIn() &&
  //         userInfos.roles.includes('ROLE_ADMIN')
  //       ) {
  //         return true;
  //       } else {
  //         this.router.navigate(['/login']);
  //         return false;
  //       }
  //     }
  //     this.router.navigate(['/']);
  //     return false;
  // }
  // }
