import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from './material/material.module';

const SHARED = [

];

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ...SHARED,
    MaterialModule,
  ],
  declarations: [
    ...SHARED
  ]
})
export class SharedModule { }
