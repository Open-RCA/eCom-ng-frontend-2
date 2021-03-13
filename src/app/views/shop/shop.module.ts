import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop/shop.component';
import { ShopNavbarComponent } from 'src/app/components/shop-navbar/shop-navbar.component';
import { ShopSidebarComponent } from 'src/app/components/shop-sidebar/shop-sidebar.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [ShopComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    ShopRoutingModule
  ]
})
export class ShopModule { }
