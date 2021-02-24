import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import {TestModule} from './test/test.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    TestModule
  ],
  exports: []
})
export class ViewsModule { }
