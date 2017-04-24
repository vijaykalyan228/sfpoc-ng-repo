import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { Auth } from './auth.service';
import {AddProductsComponent} from './add-products/add-products.component';
import {RedirectComponent} from './redirect/redirect.component';
import { Observable } from 'rxjs/Observable';
import OAuth from "forcejs/oauth";
import {Router, RouterModule} from "@angular/router";
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Auth],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  accountName: Observable<string>;
  result: any;
  products: any;
  products2: any[];
  flag: boolean = false;
  displayFlag: boolean = false;
  cart: any[] = [];

  @ViewChild(RedirectComponent) redirectComponent: RedirectComponent;

  @Input() addProducts: AddProductsComponent;
  @Output() onLoad = new EventEmitter<boolean>();

  constructor(private http: Http) {}

  getProducts() {
    this.http.get("https://sfdccpq.herokuapp.com/ProductsServelet")
      .map(res => res.json())
      .subscribe(
      (response) => {
        //  alert(JSON.stringify(response));
         this.products = JSON.stringify(response.records);
         this.products2 = response.records;
         this.flag = true;
        }, //For Success Response
      err => { console.error(err) } //For Error Response
      );
  }

  ngOnInit(){
    console.log("this executes first");
    // this.accountName = this.redirectComponent.accountName;
  }

  ngAfterViewInit(){
    let appId: string = "3MVG9szVa2RxsqBbTvNBM4YS1Pw_MLD._1AFJyJFif2PpBO.sXwzzWPRx3RPtL8On69KrgvECxlSoKcUe9c.L";
    // let oauthCallbackURL: string = "https://vijaykalyan228.github.io/sfpoc-ng/oauth/";
    let oauthCallbackURL: string = "https://sfdccpq.herokuapp.com/oauth.jsp";
    let oauth = OAuth.createInstance(appId, "", oauthCallbackURL);
    // oauth.login().then(result => {
      // console.log(result); // Prints access token, instance URL, and refresh token (if any)
      // this.router.navigate(['products']);
    // });
    this.getProducts();
  }

  fetchProducts(arg: string){
    console.log("this executes third, with " + arg);
    this.onLoad.emit();
  }

  getFlag(){
    return this.flag;
  }

  addToCart(productName: string){
    // alert(productName);
    if(!this.cart.includes(productName)){
      this.cart.push(productName);
    }
    // console.log(this.cart);
  }
}
//ng build --prod --base-href /sfpoc-ng/ ngh
