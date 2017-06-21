import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {RedirectComponent} from "./redirect/redirect.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {CallbackComponent} from './callback/callback.component';
import {LocationsComponent} from './locations/locations.component';

const APP_ROUTES:Routes = [
    { path:'products',component: AddProductsComponent},
    { path:'',component: RedirectComponent},
    { path:'redirect',component: RedirectComponent},
    { path:'locations',component: LocationsComponent},
    { path:'oauth',component: CallbackComponent},
    { path:'**',component: CallbackComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const appRoutingProviders: any[] = [];
