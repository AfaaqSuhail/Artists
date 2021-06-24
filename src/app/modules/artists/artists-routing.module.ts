import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistEventDetailComponent } from '../components/artist-event-detail/artist-event-detail.component';
import { ArtistsComponent } from './artists.component';

const routes: Routes = [
  { path: '', redirectTo: '/artists', pathMatch: 'full' },
  { path: 'artists', component: ArtistsComponent },
  { path: 'artist/event/:id', component: ArtistEventDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArtistsRoutingModule { }
