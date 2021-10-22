import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProdusDto } from 'src/app/core/models/ProdusDto.model';
import { ShopProductDto } from 'src/app/core/models/ShopProductDto.model';
import { AuthService } from 'src/app/core/service/auth.service';

const 
BASE_PATH = "https://cheap-bastard-backend.herokuapp.com";

@Injectable({
  providedIn: 'root'
})
export class ProductService {



  constructor(private httpClient: HttpClient, 
    private authService: AuthService) { }

  getProducts(): Observable<any>{
    return this.httpClient.get(`${BASE_PATH}/api/products`, {headers: {authorization: this.authService.token}})
  }

  getProduct(id: number): Observable<any>{
    return this.httpClient.get(`${BASE_PATH}/api/products/${id}`, {headers: {authorization: this.authService.token}})
  }

  getShopProduct(id: number):Observable<any>{
    return this.httpClient.get(`${BASE_PATH}/api/products/shopProduct/${id}`, {headers: {authorization: this.authService.token}})
  }

  delete(id: number): Observable<any>{
    return this.httpClient.delete(`${BASE_PATH}/api/products/${id}`, {headers: {authorization: this.authService.token}})
  }

  deleteLink(id: number): Observable<any>{
    return this.httpClient.delete(`${BASE_PATH}/api/products/links/${id}`, {headers: {authorization: this.authService.token}})
  }

  post(url: string): Observable<any>{
    return this.httpClient.post(`${BASE_PATH}/api/products`, url, {headers: {authorization: this.authService.token}})
  }

  addLink(id: number, url: String){
    return this.httpClient.post(`${BASE_PATH}/api/products/${id}`, url, {headers: {authorization: this.authService.token}})
  }

  update(sp: ProdusDto): Observable<any>{
    return this.httpClient.put(`${BASE_PATH}/api/products`, sp, {headers: {authorization: this.authService.token}})
  }

}