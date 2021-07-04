import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input() artists : any = [];
  constructor() { }

  ngOnInit(): void {
    console.log('------------------------');
    console.log('artists', this.artists);
    console.log('------------------------');
  }

}
