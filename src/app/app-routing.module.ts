import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmComponent } from './film/film.component';

const routes: Routes = [
  {path: '', component: FilmComponent},
  {path: 'film-detail/:id', loadChildren: './+film-detail#FilmDetailModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
