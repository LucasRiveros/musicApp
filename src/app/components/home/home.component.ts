import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
  releases: any[] = [];
  title: any[] = [];
  subtitle: any[] = [];
  loading = true;

  constructor( private _router: Router, private spotify: SpotifyService) {

    spotify.getNewReleases()
      .subscribe( (val: any) => {
        this.releases = val;
        this.loading = false;
      });
  }

  goAlbum(albumId: string, imgUrl: string){
    this._router.navigate(['/album',albumId, {imgUrl}])
  }

}
