import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  
  artists: any[];
  loading: boolean;

  constructor ( 
    private spotify: SpotifyService,
    private _router: Router
  ) { }

  searchArtist(e: KeyboardEvent, term: string) {
    if(e.key === "Enter" && term){
      this.loading = true;
      this.spotify.getArtists(term).subscribe( (val: any) => {
        this.artists = val;
        this.loading = false;
      })
      // const action = new IncreaseAction();
      // this.store.dispatch( action );
    }
  }
  
  goArtist(artistId: string){
    this._router.navigate(['/artist', artistId])
  }

}
