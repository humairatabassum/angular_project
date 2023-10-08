import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }


  getProducts() {
    var products = [
      { id: 1, name: 'abc', description: 'abc is a good product', price: 111 },
    ]
    return products;
  }
}



