import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop-navbar',
  templateUrl: './shop-navbar.component.html',
  styleUrls: ['./shop-navbar.component.scss']
})
export class ShopNavbarComponent implements OnInit {
  cartIcon:String = 'src/assets/icons/shopping-cart-icon.png';
  constructor() { }

  ngOnInit(): void {
  }

}
