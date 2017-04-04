import {Routes, RouterModule} from "@angular/router";
import {RedirectComponent} from "./redirect/redirect.component";
import {AddProductsComponent} from "./add-products/add-products.component";

const APP_ROUTES:Routes = [
    { path:'products',component: AddProductsComponent},
    { path:'',component: RedirectComponent},
    { path:'redirect',component: RedirectComponent}
]

export const routing = RouterModule.forRoot(APP_ROUTES);
