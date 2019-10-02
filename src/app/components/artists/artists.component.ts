import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {

  private artistId: string;
  albums: any[];
  loading: boolean = true;

  constructor(private _router: Router, private _activatedRoute: ActivatedRoute, private spotify: SpotifyService) {
    
    this._activatedRoute.params.subscribe( params => {
      this.artistId = params.id;
    })

    this.spotify.getAlbums(this.artistId).subscribe(val => {
      this.albums = val;
      this.loading = false;
    });
  }

  goAlbum(albumId: string, imgUrl: string){
    this._router.navigate(['/album',albumId, {imgUrl}])
  }

}
