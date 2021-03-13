import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';
import { CustomersComponent } from './customers/customers.component';
import { SettingsComponent } from './settings/settings.component';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [DashboardComponent, OrdersComponent, ProductsComponent, CustomersComponent, SettingsComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
