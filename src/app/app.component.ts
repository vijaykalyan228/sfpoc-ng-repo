import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild, NgZone } from '@angular/core';
import {AddProductsComponent} from './add-products/add-products.component';
import {RedirectComponent} from './redirect/redirect.component';
import { Observable } from 'rxjs/Observable';
import OAuth from "forcejs/oauth";
import {Router, RouterModule} from "@angular/router";
import { Http } from '@angular/http';
import {SharedService} from './shared-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [SharedService],
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

  constructor(private http: Http, private _sharedService: SharedService, private zone:NgZone) {
    this.invokeSharedService();
  }

  invokeSharedService(){
    this.zone.run(() =>{
      this._sharedService.changeEmitted$.subscribe(
        text => {
          console.log(text);
          this.flag = true;
          console.log(this.flag);
        });
    });
  }

  getProducts() {
    this.http.get("https://sfdccpq.herokuapp.com/ProductsServelet")
      .map(res => res.json())
      .subscribe(
      (response) => {
        //  alert(JSON.stringify(response));
        this.products = JSON.stringify(response.records);
        this.products2 = response.records;
        this.flag = false;
      }, //For Success Response
      err => { console.error(err) } //For Error Response
      );
  }

  ngOnInit() {
    // console.log("this executes first");
    // this.accountName = this.redirectComponent.accountName;
  }

  ngAfterViewInit() {
    this.getProducts();
  }

  fetchProducts(arg: string) {
    console.log("this executes third, with " + arg);
    this.onLoad.emit();
  }

  getFlag() {
    return this.flag;
  }

  addToCart(productName: string) {
    // alert(productName);
    if (!this.cart.includes(productName)) {
      this.cart.push(productName);
    }
    console.log(this.cart);
  }
}
//ng build --prod --base-href /sfpoc-ng/ ngh
