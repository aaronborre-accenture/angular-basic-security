import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const securityGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  // conditions for security
  const router: Router = inject(Router);
  
  return localStorage.getItem('token') ? true : falseLogin();

  
};
const falseLogin = () => {
  alert('You need to login');
  return false;
}
