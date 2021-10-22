import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  @Input() err: HttpErrorResponse = new HttpErrorResponse({});

  ngOnInit(): void {
  }

  get error(){
    return !!this.err.error && typeof(this.err.error) == "string" ? this.err.error : this.err.message
  }

}
