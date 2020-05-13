import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import 'rxjs/add/operator/do'

import { User } from './../../../../backend/users';
import { MEAT_API } from './../../app.api';

@Injectable()
export class LoginService {

    user: User

    constructor(private http: HttpClient){}

    isLoggedIn(): boolean {
        return this.user !== undefined
    }

    login(email: string, password: string): Observable<User>{
        return this.http.post<User>(`${MEAT_API}/login`, 
                {email: email, password: password})
    }
}