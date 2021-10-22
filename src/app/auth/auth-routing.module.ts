import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from '../core/service/auth-guard.service';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';

const paths: Routes = [
    {path: 'login', component: LoginFormComponent, canActivate: [AuthGuardService]},
    {path: 'register', component: RegisterFormComponent, canActivate: [AuthGuardService]}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(paths)
  ],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
