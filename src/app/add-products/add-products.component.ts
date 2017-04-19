import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Http} from '@angular/http';
import {HttpService} from './http.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
  providers: [HttpService]
})
export class AddProductsComponent implements OnInit {

  // @Output() getProductsEvent: EventEmitter<string> = new EventEmitter();
  // @Output() click: EventEmitter<string> = new EventEmitter();
  errorMessage: string;
  products: any;

  constructor(private http: Http) {
    // this.httpService.getProducts().subscribe(
    //   product  => this.products.push(product),
    //   error =>  this.errorMessage = <any>error
    // );
  }

  ngOnInit() {
    console.log("this executes second");
    //then finally,
    // this.getProductsEvent.emit(null);
  }

  onLoad(){
    
  }

  public getProducts() {
    this.http.get("https://sfdccpq.herokuapp.com/ProductsServelet")
      .map(res => res.json())
      .subscribe(
      (response) => {
        //  alert(JSON.stringify(response));
         this.products = JSON.stringify(response.records);
         console.log("success!");
        }, //For Success Response
      err => { console.error(err) } //For Error Response
      );
  }

}
