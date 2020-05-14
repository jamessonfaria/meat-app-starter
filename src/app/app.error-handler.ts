import { Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http'
import 'rxjs/add/observable/throw' 
import { ErrorHandler, Injectable } from '@angular/core';

import { NotificationService } from './shared/messages/notification.service';
import { LoginService } from 'app/security/login/login.service';

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
    constructor(private ns: NotificationService, private injector: Injector){ 
        super()
    }
    
    handleError(errorResponse: HttpErrorResponse | any){
        if(errorResponse instanceof HttpErrorResponse){
            const message = errorResponse.error.mesage
            switch(errorResponse.status){
                case 401:
                    this.injector.get(LoginService).handleLogin()
                    break
                case 403:
                    this.ns.notify(message || 'Não autorizado.') 
                    break
                case 404:
                    this.ns.notify(message || 'Recurso não encontrado. Verifique o console para mais detalhes.') 
                    break
            }
        }
        super.handleError(errorResponse)
    }
}