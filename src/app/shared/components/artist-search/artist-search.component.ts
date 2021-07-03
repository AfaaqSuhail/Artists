import { Component, ViewChild, ElementRef, OnInit } from "@angular/core";
import { of } from "rxjs";
import {
  debounceTime,
  map,
  distinctUntilChanged,
  filter
} from "rxjs/operators";
import { fromEvent } from 'rxjs';
import { HttpClient, HttpParams } from "@angular/common/http";


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('artistSearchInput', { static: true }) artistSearchInput: any;

  search: string;
  private results: Array<object>;


  constructor(private http: HttpClient) {
    this.search = '';
    this.results = [];
   }

  ngOnInit(): void {

    fromEvent(this.artistSearchInput.nativeElement, 'keyup').pipe(

      // get value
      map((event: any) => {
        return event.target.value;
      })
      // if character length greater then 2
      , filter(res => res.length > 2)

      // Time in milliseconds between key events
      , debounceTime(1000)

      // If previous query is diffent from current   
      , distinctUntilChanged()

      // subscription for response
    ).subscribe((text: string) => {
      this.searchArtists(text).subscribe((res: any) => {
        console.log('res', res);
      }, (err: any) => {
        console.log('error', err);
      });

    });
  }

  
  searchArtists(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http.get(`https:/rest.bandsintown.com/artists/${term}?app_id='any'`);
  }
  
}
