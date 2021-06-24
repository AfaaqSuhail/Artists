import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { EndPoints } from '../constants/end-points';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {
  public isLoading = new BehaviorSubject<boolean>(false);
  constructor(private http: HttpClient) { }

  /**
    * To get artist
    * @param {string} searchTerm
    * @returns {promise}
  */
  getArtist(searchTerm: string): Observable<any> {
    this.isLoading.next(true);
    return this.http.get(EndPoints.getArtist(searchTerm))
    .pipe(
      finalize(() => {
        this.isLoading.next(false);
      })
    )
  }

  /**
    * To get artist's events
    * @param {string} artistName
    * @returns {promise}
  */
  getArtistEvents(artistName: string) {
    this.isLoading.next(true);
    return this.http.get(EndPoints.getArtistEvent(artistName))
    .pipe(
      finalize(() => {
        this.isLoading.next(false);
      })
    )

  }

}
