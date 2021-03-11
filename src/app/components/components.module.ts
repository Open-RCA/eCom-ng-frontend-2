import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';



@NgModule({
  declarations: [DummyComponent, SidebarComponent, NavbarComponent, AdminSidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent,
    SidebarComponent,
    NavbarComponent,
    AdminSidebarComponent
  ]
})
export class ComponentsModule { }