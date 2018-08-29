import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmDetailComponent } from './component/film-detail.component';

const routes: Routes = [{
  path: '',
  component: FilmDetailComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FilmDetailRoutingModule { }
