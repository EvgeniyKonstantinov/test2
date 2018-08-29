import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmDetailRoutingModule } from './film-detail-routing.module';
import { FilmDetailComponent } from './component/film-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FilmDetailRoutingModule,
    SharedModule,
  ],
  declarations: [FilmDetailComponent]
})
export class FilmDetailModule { }
