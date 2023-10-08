import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {

  // product = {
  //   id: 1,
  //   name: 'abc',
  //   description: 'abc is a good product',
  //   price: 111
  // }

  productName: string = '';
  productPrice: number = 0;
  productDescription: string = '';

  onSubmit() {
    // Handle form submission here
    console.log('Product Name:', this.productName);
    console.log('Price:', this.productPrice);
    console.log('Description:', this.productDescription);
  }
}
