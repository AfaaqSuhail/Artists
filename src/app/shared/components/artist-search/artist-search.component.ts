import { Component, ViewChild, ElementRef, OnInit, Output, EventEmitter } from "@angular/core";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpResponse } from "@angular/common/http";
import { ArtistsService } from "../../services/artists.service";
import { IArtist } from "../../interfaces/artitst.interface";


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('artistSearchInput', { static: true }) artistSearchInput: any;
  @Output() artists: EventEmitter<IArtist[]> = new EventEmitter();
  @Output() clearSearch = new EventEmitter();

  search: string;


  constructor(private readonly http: HttpClient, private readonly artistsService: ArtistsService) {
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
    ).subscribe((searchTerm: string) => {
      this.searchArtists(searchTerm).subscribe((res: any) => {
        const artists: IArtist[] = res.body;
        this.artists.emit(artists);
        console.log('res', res);
      }, (err: any) => {
        const res: IArtist[] = [{
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

  
  searchArtists(searchTerm: string) {
    if (!searchTerm) {
      this.clearSearch.emit(true);
    }
    return this.artistsService.getArtists(searchTerm);
  }
  
}
