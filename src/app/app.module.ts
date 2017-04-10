import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpacePlusPipe } from './spaceplus.pipe';
import {routing, appRoutingProviders } from './app.routing';
import { RedirectComponent } from './redirect/redirect.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CallbackComponent } from './sf-js/sf-js.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    AddProductsComponent,
    SpacePlusPipe,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
