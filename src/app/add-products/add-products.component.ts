import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css'],
  providers: [HttpService]
})
export class AddProductsComponent implements OnInit {

  errorMessage: string;
  products: any[];

  constructor(private http: HttpService) {
    this.http.getProducts().subscribe(
      product  => this.products.push(product),
      error =>  this.errorMessage = <any>error
    );
  }

  ngOnInit() {
  }

}
