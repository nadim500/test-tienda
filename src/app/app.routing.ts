import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: './landing/landing.module#LandingModule'
      }/*, {
        path: 'bill',
        loadChildren: './bill/bill.module#BillModule',
      }, {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
      }*/, {
        path: '**',
        redirectTo: '/'
      }
    ], {
        preloadingStrategy: PreloadAllModules
      })
  ],
  exports: [
    RouterModule
  ],
  providers: [

  ]
})
export class AppRoutingModule { }
