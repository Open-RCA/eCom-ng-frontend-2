import { CustomersModule } from './views/customers/customers.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';
import { TestModule } from './views/test/test.module';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { ShopModule } from './views/shop/shop.module';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'customers'
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
