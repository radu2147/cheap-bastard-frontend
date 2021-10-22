import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)},
  {path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  {path: 'profile', loadChildren: () => import('./profile-section/profile-section.module').then(m => m.ProfileSectionModule)},

  { 
    path: '**', 
    pathMatch: 'full',
    redirectTo: "/"
  }

]

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy',
  })
  ],
  exports:[RouterModule],
})
export class AppRoutingModule { }
