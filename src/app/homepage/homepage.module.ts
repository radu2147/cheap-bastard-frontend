import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { PresentationComponent } from './presentation/presentation.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { ShopsComponent } from './shops/shops.component';
import { HomepageComponent } from './homepage.component';
import { HomepageRoutingModule } from './homepge-routing.module';



@NgModule({
  declarations: [
    PresentationComponent,
    GetStartedComponent,
    ShopsComponent,
    HomepageComponent

  ],
  imports: [
    CommonModule,
    CoreModule,
    HomepageRoutingModule
  ],
})
export class HomepageModule { }
