import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';
import { IEvent } from 'src/app/shared/interfaces/events.interface';
import { ArtistsService } from 'src/app/shared/services/artists.service';
import { EventNotifications } from '../../../shared/constants/enums'
import { Location } from '@angular/common';

@Component({
	selector: 'app-artist-event-detail',
	templateUrl: './artist-event-detail.component.html',
	styleUrls: ['./artist-event-detail.component.scss']
})
export class ArtistEventDetailComponent implements OnInit {
	artist: any | IArtist;
	artistName: any | string;
	events: IEvent[];
	noEventNotification: string;
	isArtist: boolean;
	constructor(
		public readonly artistsService: ArtistsService,
		private readonly route: ActivatedRoute,
		private readonly location: Location
	) {
		this.artist = {};
		this.events = [];
		this.noEventNotification = '';
		this.artistName = '';
		this.isArtist = false;
	}

	ngOnInit(): void {
		this.route.params
			.subscribe(
				(params: Params) => {
					this.artistName = params.id;
				}
			);
		this.getArtist();
	};
	
	/**
    	*To go back to last url
  	*/
	backClickHandler() {
		this.location.back();
	};

	/**
    	*Gets artist's events
  	*/
	getArtistEvents() {
		this.artistsService.getArtistEvents(this.artistName).subscribe((res: any) => {
			if (!res.length) {
				this.noEventNotification = `${EventNotifications.NoEvents}${this.artistName}`
			} else {
				this.events = res;
			}
		})
	};

	/**
    	*To Get artist
  	*/
	getArtist() {
		this.artistsService.getArtist(this.artistName).subscribe((res) => {
			this.artist = res;
			this.isArtist = true;
			this.getArtistEvents();
		})
	};

	/**
    	*To Formate Date as per the requirement
  	*/
	formateDate(dateTime: string) {
		let date = new Date(dateTime);
		return date.toDateString()
	};

}
