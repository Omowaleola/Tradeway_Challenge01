import { Injectable } from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, CanActivateChild} from '@angular/router';

export interface IUser {
  id?: number,
  email: string;
  avatarUrl?: string,
  fullName?: string,
  cellPhone?: string,

}

const defaultPath = '/';
const defaultUser = {
  id:1,
  email: 'ekemini@promoforce.com',
  avatarUrl: 'https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png',
  fullName: 'Eki Udom',
  cellPhone: '0854326789'};

@Injectable()
export class AuthService {
  private _user: IUser | null = defaultUser;

  get isAdmin(): boolean{
    return !!this._user;
  }
  get loggedIn(): boolean {
    return !!this._user;
  }

  private _lastAuthenticatedPath: string = defaultPath;
  set lastAuthenticatedPath(value: string) {
    this._lastAuthenticatedPath = value;
  }

  constructor(private router: Router) { }

  async logIn(email: string, password: string) {

    try {

      console.log(email, password);
      this._user = { ...defaultUser, email };
      this.router.navigate([this._lastAuthenticatedPath]);

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        message: "Authentication failed"
      };
    }
  }

  async getUser() {
    try {
      // Send request

      return {
        isOk: true,
        data: this._user
      };
    }
    catch {
      return {
        isOk: false,
        data: null
      };
    }
  }


  async resetPassword(email: string) {
    try {
      // Send request
      console.log(email);

      return {
        isOk: true
      };
    }
    catch {
      return {
        isOk: false,
        message: "Failed to reset password"
      };
    }
  }

  async logOut() {
    this._user = null;
    this.router.navigate(['/login-form']);
  }
}

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const isAdmin= this.authService.isAdmin;
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
    ].includes(route.routeConfig?.path || defaultPath);

    if (isLoggedIn && isAuthForm && isAdmin) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = route.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, ):  boolean  {
    const isAdmin= this.authService.isAdmin;
    const isLoggedIn = this.authService.loggedIn;
    const isAuthForm = [
      'login-form',
    ].includes(childRoute.routeConfig?.path || defaultPath);

    if (isLoggedIn && isAuthForm && isAdmin) {
      this.authService.lastAuthenticatedPath = defaultPath;
      this.router.navigate([defaultPath]);
      return false;
    }

    if (!isLoggedIn && !isAuthForm) {
      this.router.navigate(['/login-form']);
    }

    if (isLoggedIn) {
      this.authService.lastAuthenticatedPath = childRoute.routeConfig?.path || defaultPath;
    }

    return isLoggedIn || isAuthForm;
  }
}
