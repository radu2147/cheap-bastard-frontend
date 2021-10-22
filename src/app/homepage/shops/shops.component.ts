import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent implements OnInit {
  
  BASE_PATH = "assets/shops/";

  paths = ["assets/shops/emag.png","assets/shops/price.png", "assets/shops/fashiondays.png", "assets/shops/altex.png", "assets/shops/evomag.png", "assets/shops/elefant.png"];
  constructor() { }

  ngOnInit(): void {
  }

}
