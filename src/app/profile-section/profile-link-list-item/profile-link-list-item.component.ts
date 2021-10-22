import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ShopProductDto } from 'src/app/core/models/ShopProductDto.model';

@Component({
  selector: 'app-profile-link-list-item',
  templateUrl: './profile-link-list-item.component.html',
  styleUrls: ['./profile-link-list-item.component.css']
})
export class ProfileLinkListItemComponent implements OnInit {

  @Input() el: ShopProductDto | undefined

  @Output() delete = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  get current_price(){
    return this.el?.history[this.el?.history.length - 1].price;
  }
  
  get provider(){
    return `/assets/shops/${this.el?.provider}.png`
  }

  del(){
    this.delete.emit(this.el?.id)
  }

}
