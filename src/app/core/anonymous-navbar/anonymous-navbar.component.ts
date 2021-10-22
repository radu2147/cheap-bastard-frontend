import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anonymous-navbar',
  templateUrl: './anonymous-navbar.component.html',
  styleUrls: ['./anonymous-navbar.component.css']
})
export class AnonymousNavbarComponent {

  constructor() { }
  dropdownPopoverShow = false;

  toggleDropdown(event: Event) {
    event.preventDefault();
    this.dropdownPopoverShow = !this.dropdownPopoverShow;
    
  }

}
