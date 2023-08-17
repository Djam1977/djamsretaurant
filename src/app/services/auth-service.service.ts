import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { variable } from '../shared/variable';
@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn();
  }
  isConnected: boolean = false;
  isAdmin: boolean = false;

  public getToken() {
    if (localStorage.getItem('USER_INFOS')) {
      const accessTokenVariable = JSON.parse(
        localStorage.getItem('USER_INFOS')!
      );

      return accessTokenVariable.accessToken;
    }
  }

  isLoggedIn(): void {
    const infosLocaleStorages = JSON.parse(localStorage.getItem('USER_INFOS')!);
    if (infosLocaleStorages) {
      this.isConnected = true;
    }

    if (infosLocaleStorages.roles.includes('ADMIN')) {
      this.isAdmin = true;
    }
  }
  logOut(): void {
    // Vide le local storage
    localStorage.removeItem('USER_INFOS');
    //Retour page acceuil et aprés (.then) rafraichir la page
    this.router.navigate(['/']).then(() => {
      location.reload();
    });
  }

  // création dans le shared d'une variable URLAPI pour pouvoir l'utiliser partout et si l'URL change je ne la changerais que dans le varible.ts
  signin(user: FormGroup) {
    return this.http.post(variable.URLAPI + '/auth/signin', user.value);
  }
  // signup(user: FormGroup) {
  //   return this.http.post(variable.URLAPI + '/auth/signup', user.value);
  // }

  public setSession(userInfoFromBackend: any) {
    const jwt: any = jwt_decode(userInfoFromBackend.accessToken);

    const expiresAt = new Date(jwt.exp * 1000);
    const userInfoUpdate = {
      id: userInfoFromBackend.id,
      username: userInfoFromBackend.username,
      email: userInfoFromBackend.email,
      roles: userInfoFromBackend.roles,
      tokenType: userInfoFromBackend.tokenType,
      accessToken: userInfoFromBackend.accessToken,
      expiresAt: expiresAt,
    };

    localStorage.setItem('USER_INFOS', JSON.stringify(userInfoUpdate));
    this.isConnected = true;
    this.isAdmin = userInfoFromBackend.roles.includes('ROLE_ADMIN');
  }
}
