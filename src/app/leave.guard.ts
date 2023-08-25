import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

type CanDeactivateType = Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

export interface CanComponentDeactivate {
  canDeactivate: () => CanDeactivateType;
}
export const leaveGuard: CanDeactivateFn<any> = (component: CanComponentDeactivate,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot) => {
    return component.canDeactivate ? component.canDeactivate() : true;
};


