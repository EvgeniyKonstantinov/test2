import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule
} from '@angular/material';

const SHARED = [
  MatButtonModule,
  MatAutocompleteModule,
  MatInputModule,
  MatIconModule,
  MatCardModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...SHARED,
  ],
  exports: [
    ...SHARED
  ],
  declarations: []
})
export class MaterialModule { }
