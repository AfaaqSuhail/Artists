import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('artistSearchInput', { static: true }) artistSearchInput: any;
  @Output() artists = new EventEmitter();
  @Output() clearSearch = new EventEmitter();

  search: string;


  constructor(private http: HttpClient) {
    this.search = '';
   }

  ngOnInit(): void {

    fromEvent(this.artistSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      // , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.searchArtists(text).subscribe((res: any) => {
        res = [{
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        }];
        this.artists.emit(res);
        console.log('res', res);
      }, (err: any) => {
        const res = [{
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },{
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },{
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },
        {
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },
        {
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },
        {
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },
        {
          "id": 510,
          "name": "Maroon 5",
          "url": "http://www.bandsintown.com/Maroon5?came_from=67",
          "image_url": "https://s3.amazonaws.com/bit-photos/large/7481529.jpeg",
          "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/7481529.jpeg",
          "facebook_page_url": "https://www.facebook.com/maroon5",
          "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
          "tracker_count": 0,
          "upcoming_event_count": 0
        },];
        this.artists.emit(res);
        console.log('error', err);
      });

    });
  }

  
  searchArtists(term: string) {
    if (!term) {
      this.clearSearch.emit(true);
    }
    return this.http.get(`https:/rest.bandsintown.com/artists/${term}?app_id='any'`);
  }
  
}
