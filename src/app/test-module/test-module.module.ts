import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent1Component } from './test-component1/test-component1.component';

@NgModule({
  declarations: [TestComponent1Component],
  imports: [
    CommonModule
  ]
})
export class TestModuleModule { }
