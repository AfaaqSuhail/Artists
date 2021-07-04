import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {
  artists: any;
  constructor() { 
    this.artists = [];
  }

  ngOnInit(): void {
  }

  getArtists(artists: any) {
    console.log('------------------------');
    console.log('artists', artists);
    console.log('------------------------');
    this.artists = artists;
  }
  
  clearSearch(isClearSearch: boolean) {
    this.artists = [];
  }

}
