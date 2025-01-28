import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  let  router = inject(Router)
  let isLogedIn = localStorage.getItem("islogedIn");
  if(isLogedIn == "false"){
    alert("Please Authenticated")
    router.navigate(["/login"])
    return false;
  }
  return true;
};
