import { inject } from '@angular/core';
import { CanActivateFn, CanActivateChildFn } from '@angular/router';

export const authGuard: CanActivateFn | CanActivateChildFn = (route, state) => {
  // const userService = inject(UserService);

  return true;
};
