import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type CanDeactiveType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree // true | false | ['']
export interface CanComponentDeactivate{
  canDeactivate1: ()=> CanDeactiveType;
}

export const dontleaveGuard: CanDeactivateFn<any> = (component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot) => {
  return component.canDeactivate1 ? component.canDeactivate1() : true;
};
