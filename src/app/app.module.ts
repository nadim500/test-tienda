import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { LandingModule } from './landing/landing.module';
import { HttpModule } from '@angular/http';

/* FOR UNIVERSAL */
/* export { AppComponent }; */
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'tienda-seo'
    }),
    LandingModule,
    HttpModule,
    AppRoutingModule
  ],
  /* exports: [AppComponent], */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* DEVELOP */
/* @NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LandingModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 */
