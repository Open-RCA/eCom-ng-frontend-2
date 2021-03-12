import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminBodyComponent } from './admin-body/admin-body.component';



@NgModule({
  declarations: [DummyComponent, SidebarComponent, NavbarComponent, AdminSidebarComponent, AdminBodyComponent,AdminBodyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent,
    SidebarComponent,
    NavbarComponent,
    AdminSidebarComponent,
    AdminBodyComponent
  ]
})
export class ComponentsModule { }