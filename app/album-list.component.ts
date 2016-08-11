import { Component } from 'angular2/core';
import { AlbumComponent } from './album.component';
import { Album } from './album.model';
import { GenrePipe } from './genre.pipe';
import { ShoppingPipe } from './shopping.pipe';

@Component({
  selector: 'album-list',
  inputs: ['albumList'],
  directives: [AlbumComponent],
  pipes: [GenrePipe, ShoppingPipe],
  template: `
    <select (change)="onGenreChange($event.target.value)">
      <option value="all">All Albums</option>
      <option value="Hip Hop">All Hip Hop Albums</option>
      <option value="Pop">All Pop Albums</option>
      <option value="Rock">All Rock Albums</option>
    </select>
    <select (change)="onArtistChange($event.target.value)">
      <option value="all">All Artists</option>
      <option value="test-artist">All Test Artist's Albums</option>
      <option value="test-artist2">All Test Artist2's Albums</option>
      <option value="test-artist3">All Test Artist3's Albums</option>
    </select>
    <album-display *ngFor="#currentAlbum of albumList | genre:filterGenre:filterArtist"
    [album]="currentAlbum">
    </album-display><br>
    <div class="shopping jumbotron">
      <h2>Shopping Cart</h2>
      <album-display *ngFor="#currentAlbum of albumList | shopping:filterShop"
      [album]="currentAlbum">
      </album-display>
      <button (click)="getTotal()" class="btn btn-lg btn-success">Get Total</button>
      <h4 *ngIf="totalPrice !==0">{{ "$" + totalPrice}}</h4>
    </div>
  `
})

export class AlbumListComponent {
  public albumList: Album[];
  public filterGenre: string = "all";
  public filterArtist: string = "all";
  public filterShop: string = "true";
  public totalPrice: number = 0;

  onGenreChange(filterOption) {
    this.filterGenre = filterOption;
  }

  onArtistChange(filterOption) {
    this.filterArtist = filterOption;
  }

  getTotal() {
    for(var testAlbum of this.albumList) {
      if (testAlbum.cart) {
        this.totalPrice +=testAlbum.price;
      } else {
        this.totalPrice;
      }
    };
    return this.totalPrice;
  }
}
