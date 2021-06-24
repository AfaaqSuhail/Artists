import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ArtistsComponent } from './artists.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistComponent } from '../components/artist/artist.component';
import { ArtistSearchComponent } from 'src/app/shared/components/artist-search/artist-search.component';
import { MaterialModule } from 'src/app/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArtistEventDetailComponent } from '../components/artist-event-detail/artist-event-detail.component';
import { CustomDatePipe } from 'src/app/shared/pipes/date.pipe';
import { NotAvailable } from 'src/app/shared/pipes/not-available.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ArtistsComponent,
    ArtistComponent,
    ArtistEventDetailComponent,
    ArtistSearchComponent,
    CustomDatePipe,
    NotAvailable
  ],
  imports: [
    ArtistsRoutingModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    CommonModule,
  ],
  providers: [CustomDatePipe, NotAvailable],
  bootstrap: [ArtistComponent]
})
export class ArtistsModule { }