import { ProductCreateComponent } from './product-create/product-create.component';
import { NgModule, Component, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:"products", component: ProductsComponent},
  {path:"products-create", component: ProductCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
