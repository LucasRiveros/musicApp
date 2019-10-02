import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root' //consultar
})

export class SpotifyService {  
  constructor (private http: HttpClient) {
  }

  getQuery(query: string){
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url);
  }

  getNewReleases() {
    return this.getQuery(`browse/new-releases`).pipe(map(val => val['albums'].items));
  }

  getArtists(term){
    return this.getQuery(`search?q=${term}&type=artist&limit=20`).pipe(map(val => val['artists'].items))
  }

  getAlbums(artistId){
    return this.getQuery(`artists/${artistId}/albums`).pipe(map(val => val['items']))
  }

  getTracks(albumId){
    return this.getQuery(`albums/${albumId}/tracks`).pipe(map(val => val['items']))
  }
  
  // getToken(){
  //   const client_id = 'f9f48731eecd489eb6b2a21ab98cd081';// Your client id
  //   const client_secret = 'd8fec5a1d63740e3bcd6f9b71d0112f4';// Your secret
  //   const buffer = btoa(client_id + ':' + client_secret);
  //   var authOptions = {
  //     url: 'https://accounts.spotify.com/api/token',
  //     headers: {
  //       'Authorization': 'Basic ' + buffer
  //     },
  //     form: {
  //       grant_type: 'client_credentials'
  //     },
  //     json: true
  //   };
  // }

}