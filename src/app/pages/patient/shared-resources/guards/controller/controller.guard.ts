import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../../services/login/login.service';

@Injectable({
  providedIn: 'root',
})
export class ControllerGuard implements CanActivate {
  constructor(private router: Router, private authService: LoginService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticatedUser()) {
      // User is logged in, redirect to a different page.
      this.router.navigate(['/patient']); // Change '/home' to your desired route.
      return false;
    } else {
      return true;
    }
  }
}
