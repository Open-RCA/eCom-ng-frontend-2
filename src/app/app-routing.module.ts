import { CustomersModule } from './views/customers/customers.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';
import { TestModule } from './views/test/test.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ShopModule } from './views/shop/shop.module';
import { ProductsModule } from './views/products/products.module';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'shop'
},
{
  path: 'test',
  loadChildren: () => import('./views/test/test-routing.module').then((m) => TestModule),data: {
    shouldPreload: true
  }

},
{
  path: 'customers',
  loadChildren: () => import('./views/customers/customers-routing.module').then((m) => CustomersModule),data: {
    shouldPreload: true
  }
},
{
  path: 'dashboard',
  loadChildren: () => import('./views/dashboard/dashboard-routing.module').then((m) => DashboardModule),data: {
    shouldPreload: true
  }
},
{
  path: 'shop',
  loadChildren: () => import('./views/shop/shop-routing.module').then((m) => ShopModule),data: {
    shouldPreload: true
  }
},
{
  path: 'products',
  loadChildren: () => import('./views/products/products-routing.module').then((m) => ProductsModule),data: {
    shouldPreload: true
  }
}

];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
