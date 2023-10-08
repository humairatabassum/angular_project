import { Productform } from './../Models/products';
import { ProductService } from './../product.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  // products: Product[] = [];
  // constructor(private productService: ProductService) {
  //   this.products = productService.getProducts();
  // }

  product: Productform[]=[]
  constructor(private prService  : ProductService) {
    this.product = prService.getProducts();

  }


}
