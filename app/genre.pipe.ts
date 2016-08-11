import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "genre",
  pure: false
})
export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var genreFilter = args[0];
    var artistFilter = args[1];
    if (genreFilter === "Hip Hop") {
      return input.filter((album) => {
        if (artistFilter === "test-artist") {
          return album.artist === "test-artist" && album.genre === "Hip Hop";
        } else if (artistFilter === "test-artist2") {
          return album.artist === "test-artist2" && album.genre === "Hip Hop";
        } else if (artistFilter === "test-artist3") {
          return album.artist === "test-artist3" && album.genre === "Hip Hop";
        } else {
          return album.genre === "Hip Hop";
        }
      });
    } else if (genreFilter === "Pop") {
      return input.filter((album) => {
        if (artistFilter === "test-artist") {
          return album.artist === "test-artist" && album.genre === "Pop";
        } else if (artistFilter === "test-artist2") {
          return album.artist === "test-artist2" && album.genre === "Pop";
        } else if (artistFilter === "test-artist3") {
          return album.artist === "test-artist3" && album.genre === "Pop";
        } else {
          return album.genre === "Pop";
        }
      });
    } else if (genreFilter === "Rock") {
      return input.filter((album) => {
        if (artistFilter === "test-artist") {
          return album.artist === "test-artist" && album.genre === "Rock";
        } else if (artistFilter === "test-artist2") {
          return album.artist === "test-artist2" && album.genre === "Rock";
        } else if (artistFilter === "test-artist3") {
          return album.artist === "test-artist3" && album.genre === "Rock";
        } else {
          return album.genre === "Rock";
        }
      });
    } else {
      return input.filter((album) => {
        if (artistFilter === "test-artist") {
          return album.artist === "test-artist";
        } else if (artistFilter === "test-artist2") {
          return album.artist === "test-artist2";
        } else if (artistFilter === "test-artist3") {
          return album.artist === "test-artist3";
        } else {
          return input;
        }
      });
    }
  }
}
