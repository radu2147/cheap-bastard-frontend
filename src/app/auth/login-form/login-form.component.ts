import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/service/auth-guard.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private service: AuthenticationService,
              private sharedAuthService: AuthService,
              private authGuardService: AuthGuardService,
              private router: Router

    ) { }

  email: string | null = null;
  password: string | null = null;

  error: string | null = null;

  ngOnInit(): void {
  }

  login(){
      if(!!this.email && !!this.password){
        this.service.login({username: this.email!, password: this.password!})
          .subscribe(val => {
            if(!!val?.token){
              this.sharedAuthService.saveToken(val.token);
              this.router.navigateByUrl('/');
              return;
            }

          }, 
          
          (err) => {
            this.error = err.error;
          }
          )
          
      }
  }

}

