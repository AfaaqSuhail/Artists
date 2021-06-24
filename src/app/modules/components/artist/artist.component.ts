import { Component, Input } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';
import { GeneralConstants as GeneralConstants } from '../../../shared/constants/enums';
import { EndPoints } from '../../../shared/constants/end-points'
@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent {
  @Input() artist!: IArtist | any;

  isEventPage: boolean;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {
    this.isEventPage = router.url.includes(GeneralConstants.Event) ? true : false;
  }

  /**
    * To navigate to event's page
  */
  artistClickHandler() {
    const navigationExtras: NavigationExtras = {
      state: {
        artistName: this.artist.name,
      },
      relativeTo: this.route,
    };
    this.router.navigate([EndPoints.BASIC_ARTIST_EVENT, `${this.artist.name}`], navigationExtras)
  }

}
