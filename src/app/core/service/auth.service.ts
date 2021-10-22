import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenDto } from '../models/TokenDto.model';
import { UserDto } from '../models/UserDto.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient){}

  get loggedIn(){
    return !!window.localStorage.getItem('cheap-bastard-loggedIn');
  }

  saveToken(token: string){
    window.localStorage.setItem('auth-token-cheap-bastard',token);
    window.localStorage.setItem('cheap-bastard-loggedIn', "true");
  }

  get token(){
    
    const toReturn = window.localStorage.getItem('auth-token-cheap-bastard');
    if(!!toReturn){
      return toReturn;
    }
    return "Error token"
  }

  getUser(dto: TokenDto){
    return this.http.get("http://localhost:8080/api/users/current", {headers: {authorization: dto.token}})
  }

  deleteAuth(){
    window.localStorage.removeItem('auth-token-cheap-bastard');
    window.localStorage.removeItem('cheap-bastard-loggedIn');
  }

}
