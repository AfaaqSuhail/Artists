import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';

import { ArtistsComponent } from './artists.component';

describe('ArtistsComponent', () => {
  let component: ArtistsComponent;
  let fixture: ComponentFixture<ArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set artist and isArtist to true', () => {
    const mockArtist: IArtist | any = { }
    component.setArtist(mockArtist);
    expect(component.artist).toEqual(mockArtist);
    expect(component.isArtist).toEqual(true);
  });

  it('should clear search', () => {
    component.clearSearch();
    expect(component.isArtist).toEqual(false);
  });
});
