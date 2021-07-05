import { Component } from '@angular/core';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';
import { IEvent } from 'src/app/shared/interfaces/events.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
  artists!: IArtist[];
  events!: IEvent[];
  constructor() { }

  setArtists(artists: IArtist[]) {
    this.artists = artists;
  }
  
  clearSearch() {
    this.artists = [];
  }

}
