import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DummyComponent } from './dummy/dummy.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [DummyComponent, SidebarComponent],
  imports: [
    CommonModule
  ],
  exports: [
    DummyComponent,
    SidebarComponent
  ]
})
export class ComponentsModule { }
