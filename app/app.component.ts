import { Component } from 'angular2/core';
import { AlbumListComponent } from './album-list.component';
import { Album } from './album.model';

@Component({
  selector: 'my-app',
  directives: [AlbumListComponent],
  template: `
    <div class="container">
      <h1>Music Store</h1>
      <album-list
        [albumList] = "albums">
      </album-list>
    </div>
  `
})
export class AppComponent {
  public albums: Album[];
  constructor(){
    this.albums = [
      new Album("test-name", "test-artist", 9, "test-genre", 0),
      new Album("test-name2", "test-artist2", 8, "test-genre2", 1),
      new Album("test-name3", "test-artist3", 7, "test-genre3", 2)
    ]
  }
}
