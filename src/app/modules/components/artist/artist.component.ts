import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IArtist } from 'src/app/shared/interfaces/artitst.interface';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {
  @Input()
  artists!: IArtist[];
  
  constructor(private readonly router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  
  }

  artistClickHandler(artist: IArtist) {
    this.router.navigate(['/artist/event', `${artist.id}`], { relativeTo: this.route})
  }

}
