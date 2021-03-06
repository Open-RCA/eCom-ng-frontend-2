import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {NavbarComponent} from './navbar/navbar.component';


@NgModule({
  declarations: [DummyComponent, SidebarComponent,NavbarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent,
    SidebarComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }
