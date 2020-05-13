import { LoginService } from 'app/security/login/login.service';
import { CanLoad, Route } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService){}

    canLoad(route: Route): boolean {
        const loggedIn = this.loginService.isLoggedIn()
        if(!loggedIn){
            this.loginService.handleLogin(`/${route.path}`)
        }

        return loggedIn
    }

}