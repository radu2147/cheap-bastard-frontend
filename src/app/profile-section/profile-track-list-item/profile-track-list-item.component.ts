import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProdusDto } from 'src/app/core/models/ProdusDto.model';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-profile-track-list-item',
  templateUrl: './profile-track-list-item.component.html',
  styleUrls: ['./profile-track-list-item.component.css']
})
export class ProfileTrackListItemComponent implements OnInit {

  constructor(private service: ProductService) { }

  @Input() el: ProdusDto = {id: -1, name: "", img_name: "", history: [], lowestPrice: -1};

  @Output() delete = new EventEmitter();

  ngOnInit(): void {
  }

  del(){
    this.delete.emit(this.el.id)
  }

}
