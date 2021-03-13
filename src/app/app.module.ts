import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './directives/test.directive';
import { TestPipe } from './pipes/test.pipe';
import {ComponentsModule} from './components/components.module';
import {ViewsModule} from './views/views.module';
// import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestPipe,
      ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    ViewsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
