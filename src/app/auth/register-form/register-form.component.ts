import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardService } from 'src/app/core/service/auth-guard.service';
import { AuthService } from 'src/app/core/service/auth.service';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

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

  register(){
    if(!!this.email && !!this.password){
      this.service.register({username: this.email!, password: this.password!})
        .subscribe(val => {
          if(!!val?.token){
            this.sharedAuthService.saveToken(val.token);
            this.router.navigateByUrl('/')
          }
        },
        (err) => {
          this.error = err.error;
        })
        
      return;
    }
  }

}
