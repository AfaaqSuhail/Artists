import { Location } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SpyLocation } from '@angular/common/testing';


import { ArtistEventDetailComponent } from './artist-event-detail.component';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';
import { IEvent } from 'src/app/shared/interfaces/events.interface';

describe('ArtistEventDetailComponent', () => {
  let component: ArtistEventDetailComponent;
  let fixture: ComponentFixture<ArtistEventDetailComponent>;
  let locationStub;

  beforeEach(async () => {
    locationStub = {
      back: jasmine.createSpy('back')
    };
    await TestBed.configureTestingModule({
      declarations: [ ArtistEventDetailComponent ],
      imports: [ HttpClientModule, RouterModule.forRoot([]) ],
      providers: [ {provide: Location, useValue: locationStub} ]
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

  it('should back click', () => {
    const location = fixture.debugElement.injector.get(Location);
    component.backClickHandler();
    expect(location.back).toHaveBeenCalledTimes(1);
  });

  it('should get a artist', () => {
    const mockArtist : IArtist | any = {};
    spyOn(component,'getArtist').and.callThrough();
    expect(component.artist).toEqual(mockArtist);
  });

  it('should get events', () => {
    const mockEvents : IEvent[] | any = [];
    spyOn(component,'getArtistEvents').and.callThrough();
    expect(component.events).toEqual(mockEvents);
  });

  it('should get events', () => {
    const mockEvents : IEvent[] | any = [];
    spyOn(component,'getArtistEvents').and.callThrough();
    expect(component.events).toEqual(mockEvents);
  });

  it('should formate a date', () => {
    const date = "Wed May 04 2016 00:00:00 GMT+0530";
    expect(component.formateDate(date)).toBe(new Date(date).toDateString())
  });


});
