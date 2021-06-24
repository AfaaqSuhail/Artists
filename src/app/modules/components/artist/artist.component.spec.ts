import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NotAvailable } from 'src/app/shared/pipes/not-available.pipe';
import { ArtistEventDetailComponent } from '../artist-event-detail/artist-event-detail.component';

import { ArtistComponent } from './artist.component';

describe('ArtistComponent', () => {
  let component: ArtistComponent;
  let fixture: ComponentFixture<ArtistComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistComponent, NotAvailable ],
      imports: [RouterTestingModule.withRoutes([
        { path: 'artist/event/:id', component: ArtistEventDetailComponent }
    ])],
      providers: []
    })
    .compileComponents()
    .then(() => {
      fixture = TestBed.createComponent(ArtistComponent);
      component = fixture.componentInstance;
      component.artist = {
        name : 'John',
        facebook_page_url: '',
      }
      fixture.detectChanges();
     });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});