import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdusDto } from 'src/app/core/models/ProdusDto.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ProductService } from '../service/product.service';
import { TransitionService } from '../service/transition.service';

@Component({
  selector: 'app-profile-track-page',
  templateUrl: './profile-track-page.component.html',
  styleUrls: ['./profile-track-page.component.css']
})
export class ProfileTrackPageComponent implements OnInit {

  el: ProdusDto = {
    id: 0,
    name: '',
    img_name: null,
    history: [],
    lowestPrice: 0
  }

  url: string = ""
  showModal = false;
  name: string = this.el.name;

  constructor(private transitionService: TransitionService, 
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.transitionService.inProcess();
    this.productService.getProduct(+this.route.snapshot.paramMap.get("id")!!).subscribe(el => {
      this.el = el;
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

  get error(){
    return this.transitionService.error
  }

  get err(){
    return this.transitionService.err
  }

  get loading(){
    return this.transitionService.loading
  }

  get showMain(){
    return !this.transitionService.loading && !this.transitionService.error;
  }

  delete(id: number){
    this.transitionService.inProcess();
    this.productService.deleteLink(id).subscribe(() => {
      this.transitionService.success();
      if(this.el.history.length == 1){
        this.router.navigateByUrl("/profile")
      }
      else{
        this.load();
      }
    }, 
    (err) => {
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
       this.transitionService.fail(err); 
    })
  }
  
  submit(){
    this.transitionService.inProcess();
    this.productService.addLink(this.el.id, this.url).subscribe(() => {this.transitionService.success(); this.load()}, (err) => {
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
      this.transitionService.fail(err);
    })
  }

  updateModalState(){
    this.showModal = !this.showModal;
  }

  updateShopProduct(){
    this.updateModalState();
    this.el.name = this.name;
    this.productService.update(this.el).subscribe(() => {
      this.load();
    },
    (err) => {
      if(err.status == 403){
        this.authService.deleteAuth();
        err.error = 'Token must have expired. Please try and login again';
      }
       this.transitionService.fail(err); 
    });
  }

}