import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSectionRouting } from './profile-section-routing.module';
import { ProfileSectionMain } from './profile-section-main.component';
import { CoreModule } from '../core/core.module';
import { ProfileTrackListItemComponent } from './profile-track-list-item/profile-track-list-item.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product.service';
import { FormsModule } from '@angular/forms';
import { ProfileTrackPageComponent } from './profile-track-page/profile-track-page.component';
import { ProfileLinkListItemComponent } from './profile-link-list-item/profile-link-list-item.component';
import { TransitionService } from './service/transition.service';
import { ProfileLinkPageComponent } from './profile-link-page/profile-link-page.component';

@NgModule({
  declarations: [
    ProfileSectionMain,
    ProfileTrackListItemComponent,
    ProfileTrackPageComponent,
    ProfileLinkListItemComponent,
    ProfileLinkPageComponent
  ],
  imports: [
    CommonModule,
    ProfileSectionRouting,
    HttpClientModule,
    CoreModule,
    FormsModule
  ],
  providers:[
    ProductService,
    TransitionService
  ]
})
export class ProfileSectionModule { }
