import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IArtist } from '../../interfaces/artitst.interface';

import { ArtistSearchComponent } from './artist-search.component';

describe('ArtistSearchComponent', () => {
  let component: ArtistSearchComponent;
  let fixture: ComponentFixture<ArtistSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSearchComponent ],
      imports: [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigate with correct params', () => {
    const searchTerm = 'John';
    const mockArtist: IArtist | any = {}
    spyOn(component,'searchArtist').and.callThrough();
    spyOn(component.artist, 'emit').and.callThrough();
    component.searchArtist(searchTerm);
    expect(component.$$artist).toEqual(mockArtist);
  });
});
