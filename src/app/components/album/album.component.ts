import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  
  private albumId: string;
  tracks: any[];
  loading: boolean = true;
  imgUrl: string;

  constructor(private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    this._activatedRoute.params.subscribe( params => {
      this.albumId = params.id;
      this.imgUrl = params.imgUrl;
    })

    this.spotify.getTracks(this.albumId).subscribe(val => {
      this.tracks = val;
      this.loading = false;
    });
  }

}