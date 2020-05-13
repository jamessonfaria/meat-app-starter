import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { NotificationService } from './../../shared/messages/notification.service';
import { LoginService } from './login.service';

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  constructor(private fb: FormBuilder, 
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activateRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control('', [Validators.required, Validators.email]),
      password: this.fb.control('', [Validators.required])
    })
    this.navigateTo = this.activateRoute.snapshot.params['to'] || '/'
  }

  login(){
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                      .subscribe(user => 
                                  this.notificationService.notify(`Bem vindo, ${user.name}`),
                                response => // HttpErrorResponse
                                  this.notificationService.notify(response.error.message),
                                ()=>{
                                  this.router.navigate([this.navigateTo])
                                })
  }

}
