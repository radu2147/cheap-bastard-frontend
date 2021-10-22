import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileLinkPageComponent } from './profile-link-page/profile-link-page.component';
import { ProfileSectionMain } from './profile-section-main.component';
import { ProfileTrackPageComponent } from './profile-track-page/profile-track-page.component';

const routes: Routes = [
  {path: "", component: ProfileSectionMain},
  {path: ":id", component: ProfileTrackPageComponent},
  {path: "provider/:id", component: ProfileLinkPageComponent}
  
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProfileSectionRouting { }
