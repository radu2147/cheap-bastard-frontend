import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransitionService {

  constructor() { }

  loading: boolean = false;
  error: boolean = false;

  err: HttpErrorResponse = new HttpErrorResponse({})

  success(){
    this.loading = false;
  }

  fail(err: HttpErrorResponse){
    this.error = true;
    this.loading = false;
    this.err = err;
  }

  inProcess(){
    this.loading = true;
  }
}
