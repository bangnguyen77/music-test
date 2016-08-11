import { Component } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div>
      <h3>{{ album.name }}, {{ album.artist }}</h3>
      <h4>{{ album.price }}, {{ album.genre }}</h4>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
}
