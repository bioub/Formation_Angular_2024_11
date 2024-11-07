import { CanActivateFn, CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  return true;
};
