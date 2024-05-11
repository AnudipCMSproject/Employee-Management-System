import { inject } from '@angular/core';
import { CanActivateFn ,Router} from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router=inject(Router);
  let isloggedIn=sessionStorage.getItem("isloggedIn");
if(isloggedIn==='true'|| isloggedIn==='false'){
  alert("login successful.....");
    return true;
   }
else{
  alert("login unsuccessful please try.....");
  _router.navigate(['login']);
  return false;
}


   

 
  return false;
};
