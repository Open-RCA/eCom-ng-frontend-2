import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QuicklinkModule, QuicklinkStrategy} from 'ngx-quicklink';
import { TestModule } from './views/test/test.module';

const routes: Routes = [
  {
  path: '',
  pathMatch: 'full',
  redirectTo: 'test'
},
{
  path: 'test',
  loadChildren: () => import('./views/test/test-routing.module').then((m) => TestModule),data: {
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
