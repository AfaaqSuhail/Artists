import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistComponent } from '../components/artist/artist.component';
import { ArtistSearchComponent } from 'src/app/shared/components/artist-search/artist-search.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArtistEventDetailComponent } from '../components/artist-event-detail/artist-event-detail.component';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistComponent,
    ArtistEventDetailComponent,
    ArtistSearchComponent
  ],
  imports: [
    ArtistsRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [ArtistComponent]
})
export class ArtistsModule { }