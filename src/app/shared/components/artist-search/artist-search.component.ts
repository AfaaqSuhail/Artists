import { Component, ViewChild, OnInit, Output, EventEmitter } from '@angular/core';
import { debounceTime, map, distinctUntilChanged, take } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';
import { ArtistsService } from '../../services/artists.service';
import { IArtist } from '../../interfaces/artitst.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GeneralConstants } from '../../constants/enums';


@Component({
  selector: 'app-artist-search',
  templateUrl: './artist-search.component.html',
  styleUrls: ['./artist-search.component.scss']
})
export class ArtistSearchComponent implements OnInit {
  @ViewChild('artistSearchInput', { static: true }) artistSearchInput: any;
  artist$: Observable<any> | undefined;
  @Output() artist: EventEmitter<IArtist> = new EventEmitter();
  @Output() clearSearch = new EventEmitter(true)

  $$artist: IArtist | any;
  searchQuery: string;

  constructor(
    public readonly artistsService: ArtistsService,
    private readonly router: Router,
    private readonly route: ActivatedRoute,
  ) {
    this.searchQuery = '';
    this.$$artist = {};
  }

  ngOnInit(): void {
    this.searchQueryParamHandler();
    this.searchInputHandler();
  }

  /**
    * To take search term and search for artist
  */
  searchInputHandler() {
    fromEvent(this.artistSearchInput.nativeElement, 'keyup').pipe(
      map((event: any) => {
        return event.target.value;
      })
      , debounceTime(GeneralConstants.SearchDebounceTime)
      , distinctUntilChanged()
    ).subscribe((searchTerm: string) => {
      this.searchArtist(searchTerm)
    })
  }

  /**
    * To subscribe search query params
  */
  searchQueryParamHandler() {
    this.route.queryParams
      .pipe(
        take(1)
      )
      .subscribe(params => {
        this.searchQuery = params['search'];
        if (this.searchQuery) this.searchArtist(this.searchQuery);
      });
  }

  /**
    * To Search artist 
  */
  searchArtist(searchTerm: string): any {
    this.router.navigate([], { queryParams: { search: searchTerm } },);
    this.searchQuery = searchTerm;
    if (!searchTerm) {
      this.clearSearch.emit(true);
      return;
    }
    this.artistsService.getArtist(searchTerm).subscribe(
      (res: any) => {
        this.$$artist = res;
        this.artist.emit(this.$$artist);
      },
      () => { 
        this.clearSearch.emit(true);
        this.$$artist = {};
      }
    )
  }

}