import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SpacePlusPipe } from './spaceplus.pipe';
import {routing, appRoutingProviders } from './app.routing';
import { RedirectComponent } from './redirect/redirect.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { CallbackComponent } from './callback/callback.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdCardModule} from '@angular/material';
import { LocationsComponent } from './locations/locations.component';
import {SharedService} from './shared-service';

@NgModule({
  declarations: [
    AppComponent,
    RedirectComponent,
    AddProductsComponent,
    SpacePlusPipe,
    CallbackComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule, routing,
    MdCardModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
