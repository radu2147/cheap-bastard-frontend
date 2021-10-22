import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthenticationDto } from 'src/app/core/models/UserAuthenticationDto.model';

const 
BASE_PATH = "https://cheap-bastard-backend.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(dto: UserAuthenticationDto): Observable<any>{
    return this.http.post(`${BASE_PATH}/api/users/login`, dto)
  }

  register(dto: UserAuthenticationDto): Observable<any>{
    return this.http.post(`${BASE_PATH}/api/users/register`, dto)
  }

}
