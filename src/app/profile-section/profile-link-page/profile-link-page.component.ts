import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShopProductDto } from 'src/app/core/models/ShopProductDto.model';
import { AuthService } from 'src/app/core/service/auth.service';
import { ProductService } from '../service/product.service';
import { TransitionService } from '../service/transition.service';

@Component({
  selector: 'app-profile-link-page',
  templateUrl: './profile-link-page.component.html',
  styleUrls: ['./profile-link-page.component.css']
})
export class ProfileLinkPageComponent implements OnInit {

  constructor(private transitionService: TransitionService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  el: ShopProductDto = {
    id: 0,
    name: '',
    link: '',
    history: [],
    provider: null
  }

  load(){
    this.transitionService.inProcess();
    this.productService.getShopProduct(+this.route.snapshot.paramMap.get("id")!!).subscribe(el => {
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

  ngOnInit(): void {
    this.load();
  }

  get current_price(){
    return this.el?.history[this.el?.history.length - 1].price;
  }

}
