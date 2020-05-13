import { LoginService } from 'app/security/login/login.service';
import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

    constructor(private loginService: LoginService){}

    canLoad(route: Route): boolean {
        return this.checkAuthentication(route.path)
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        return this.checkAuthentication(route.routeConfig.path)
    }

    private checkAuthentication(path: string) {
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${path}`)
        }

        return loggedIn
    }

}