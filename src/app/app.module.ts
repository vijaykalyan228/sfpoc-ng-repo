import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpacePlusPipe } from './spaceplus.pipe';
import {routing} from './app.routing';
import { RedirectComponent } from './redirect/redirect.component';
import { AddProductsComponent } from './add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    AddProductsComponent,
    SpacePlusPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
