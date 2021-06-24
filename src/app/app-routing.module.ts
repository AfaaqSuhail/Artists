import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistsModule } from './modules/artists/artists.module';

const routes: Routes = [
  { path: '', loadChildren: () => ArtistsModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
