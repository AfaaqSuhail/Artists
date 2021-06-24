import { Component } from '@angular/core';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';
import { IEvent } from 'src/app/shared/interfaces/events.interface';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html'
})
export class ArtistsComponent {
  artist!: IArtist | any;
  events!: IEvent[];
  isArtist: boolean;
  constructor() {
    this.isArtist = false;
  }

  /**
      *To Set artist
  */
  setArtist(artist: IArtist) {
    this.isArtist = true;
    this.artist = artist;
  }

  clearSearch() {
    this.isArtist = false;
  }

}
