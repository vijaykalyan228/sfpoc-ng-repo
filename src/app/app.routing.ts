import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import {RedirectComponent} from "./redirect/redirect.component";
import {AddProductsComponent} from "./add-products/add-products.component";
import {CallbackComponent} from './sf-js/sf-js.component';

const APP_ROUTES:Routes = [
    { path:'products',component: AddProductsComponent},
    { path:'',component: RedirectComponent},
    { path:'redirect',component: RedirectComponent},
    { path:'oauth',component: CallbackComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

export const appRoutingProviders: any[] = [];
