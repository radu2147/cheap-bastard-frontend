import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AnonymousNavbarComponent } from './anonymous-navbar/anonymous-navbar.component';
import { LoggedInNavbarComponent } from './logged-in-navbar/logged-in-navbar.component';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuardService } from './service/auth-guard.service';
import { LoadingComponent } from './loading/loading.component';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    AnonymousNavbarComponent,
    LoggedInNavbarComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    FooterComponent,
    NavbarComponent,
    LoadingComponent,
    ErrorComponent,
  ],
  providers: [
    AuthService,
    AuthGuardService
  ]
})
export class CoreModule { }
