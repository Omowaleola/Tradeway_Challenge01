import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {NativeStorage} from "@ionic-native/native-storage/ngx";

@Injectable({
  providedIn: 'root'
})
export class RegisterGuard implements CanActivate {

  constructor(private router: Router, private localStorage: NativeStorage) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(localStorage.getItem("user") ==null)
    {
      this.router.navigate(["register"],{queryParams:{retUrl: route.url}});
      return false;
    }
    return true;
  }

}
