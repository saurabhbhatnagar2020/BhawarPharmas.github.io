import { Component, OnInit } from '@angular/core';
import { Product } from '../models/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productService:ProductsService;
  products:Product[];
  constructor() {
    this.productService=new ProductsService();
    this.products = [];
   }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  // getProducts(){
  //   this.products = this.productService.getProducts();
  // }
}
