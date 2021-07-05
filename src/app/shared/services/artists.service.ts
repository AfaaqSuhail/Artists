import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { endPoints } from '../constants/end-points';

@Injectable({
  providedIn: 'root'
})
export class ArtistsService {

  constructor(private http: HttpClient) { }

  getArtists(searchTerm: string) {
    return this.http.get(endPoints.GET_ARTISTS(searchTerm));
  }

  getArtistEvents(artistName: string) {
    return this.http.get(endPoints.GET_ARTIST_EVENT(artistName));
  }

}
