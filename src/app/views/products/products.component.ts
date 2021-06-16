import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  products=[
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},

  ]
  ngOnInit(): void {
  }

}
