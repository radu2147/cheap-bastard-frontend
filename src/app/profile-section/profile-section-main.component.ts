import { Component, OnInit } from '@angular/core';
import { ProdusDto } from '../core/models/ProdusDto.model';
import { ProductService } from './service/product.service';
import { TransitionService } from './service/transition.service';
import { AuthService } from '../core/service/auth.service';

@Component({
  selector: 'app-profile-section-main',
  templateUrl: './profile-section-main.component.html',
})
export class ProfileSectionMain implements OnInit {

  constructor(
    private service: ProductService,
    private authService: AuthService,
    private transitionService: TransitionService,
  ) { }

  products: Array<ProdusDto> = []

  url: string = "";
  
  load(){
    this.transitionService.inProcess();
    this.service.getProducts().subscribe(el => {
      this.products = el;
      this.transitionService.loading = false;
    },
    (err) => {
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
      this.transitionService.fail(err)
    })
  }

  ngOnInit(): void {
    this.load();
  }

  get error(){
    return this.transitionService.error
  }

  get err(){
    return this.transitionService.err
  }

  get loading(){
    return this.transitionService.loading
  }

  delete(id: number){
    this.transitionService.inProcess();
    this.service.delete(id).subscribe(() => {this.transitionService.success();this.load();}, (err) => { 
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
      this.transitionService.fail(err); 
    })
  }

  submit(){
    this.transitionService.inProcess();
    this.service.post(this.url).subscribe(() => {this.transitionService.success(); this.load()}, (err) => {
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
      this.transitionService.fail(err);
    })
  }

  get showMain(){
    return !this.transitionService.loading && !this.transitionService.error;
  }

}
