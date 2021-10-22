import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }


  ngOnInit(): void {
  }

  get loggedIn(){
    return this.authService.loggedIn
  }

}
