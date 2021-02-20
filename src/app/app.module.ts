import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestDirective } from './directives/test.directive';
import { TestPipe } from './pipes/test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
