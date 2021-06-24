import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ArtistsService } from './artists.service';

describe('ArtistsService', () => {
  let service: ArtistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ArtistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get artist', () => {
    const searchTerm = 'Afaaq';
    spyOn(service,'getArtist').and.callThrough();
    service.getArtist(searchTerm);
    expect(service.getArtist).toHaveBeenCalled();
  });

  it('should get events', () => {
    const mockedArtistName = 'Afaaq';
    spyOn(service,'getArtistEvents').and.callThrough();
    service.getArtistEvents(mockedArtistName);
    expect(service.getArtistEvents).toHaveBeenCalled();
  });
});
