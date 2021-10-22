import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../service/auth-guard.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-logged-in-navbar',
  templateUrl: './logged-in-navbar.component.html',
  styleUrls: ['./logged-in-navbar.component.css']
})
export class LoggedInNavbarComponent implements OnInit {

  constructor(private authService: AuthService,private authGuardService: AuthGuardService,) { }

  ngOnInit(): void {
  }

  dropdownPopoverShow = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
    
  }

  logout(){
    this.authService.deleteAuth();
  }
  

}
