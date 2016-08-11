import { Component, EventEmitter } from 'angular2/core';
import { Album } from './album.model';

@Component ({
  selector: 'album-display',
  inputs: ['album'],
  template: `
    <div>
      <h3><input *ngIf="!album.cart" type="checkbox" (click)="toggleCart(true)"/>
      <input *ngIf="album.cart" type="checkbox" checked (click)="toggleCart(false)"/>{{ album.name }}, {{ album.artist }}</h3>
      <h4>{{ "$" + album.price }}, {{ album.genre }}</h4>
    </div>
  `
})

export class AlbumComponent {
  public album: Album;
  toggleCart(setState: boolean) {
    this.album.cart = setState;
  }
}
