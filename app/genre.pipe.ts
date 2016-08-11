import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "genre",
  pure: false
})

export class GenrePipe implements PipeTransform {
  transform(input: Album[], args) {
    var genreFilter = args[0];
    if (genreFilter === "Hip Hop") {
      return input.filter((album) => {
        return album.genre === "Hip Hop";
      });
    } else if (genreFilter === "Pop") {
      return input.filter((album) => {
        return album.genre === "Pop";
      });
    } else if (genreFilter === "Rock") {
      return input.filter((album) => {
        return album.genre === "Rock";
      });
    } else {
      return input;
    }
  }
}
