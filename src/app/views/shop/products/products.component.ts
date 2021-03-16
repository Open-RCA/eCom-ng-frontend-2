import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  activeIcon:String = "../../../../assets/icons/active-cart-icon.svg";
  notActiveIcon:String = "../../../../assets/icons/add-to-cart.svg";
  cartIconURL:String = this.notActiveIcon;

  constructor() { }
  
  onCartMouseEnter(val: Boolean,productId: String):void {
     $(() => {
       if(val === true)
        $(`#${productId}`).attr('src',this.activeIcon);
       else
        $(`#${productId}`).attr('src',this.notActiveIcon);
     })
  }
  ngOnInit(): void {
  }
}
