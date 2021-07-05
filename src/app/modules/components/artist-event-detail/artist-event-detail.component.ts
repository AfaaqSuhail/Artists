import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artist-event-detail',
  templateUrl: './artist-event-detail.component.html',
  styleUrls: ['./artist-event-detail.component.scss']
})
export class ArtistEventDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('------------------------');
    console.log('Artist Event detail');
    console.log('------------------------');
  }

}
