import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {NewProductComponent} from './../../components/new-product/new-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  addModal!: BsModalRef;
  constructor(private modalService: BsModalService) { }

  products=[
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},
    {"productId":"#1220000" , "productName":"washing machine" , "InStock":"10", "category":"Home appliences", "price":"20000"},

  ]
  openAddMaterial(): void {
    this.addModal = this.modalService.show(NewProductComponent);
  }
  ngOnInit(): void {
  }

}
