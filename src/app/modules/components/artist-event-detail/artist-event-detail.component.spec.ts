import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistEventDetailComponent } from './artist-event-detail.component';

describe('ArtistEventDetailComponent', () => {
  let component: ArtistEventDetailComponent;
  let fixture: ComponentFixture<ArtistEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistEventDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
