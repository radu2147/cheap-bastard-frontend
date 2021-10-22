import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserAuthenticationDto } from 'src/app/core/models/UserAuthenticationDto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  login(dto: UserAuthenticationDto): Observable<any>{
    return this.http.post("http://localhost:8080/api/users/login", dto)
  }

  register(dto: UserAuthenticationDto): Observable<any>{
    return this.http.post("http://localhost:8080/api/users/register", dto)
  }

}
