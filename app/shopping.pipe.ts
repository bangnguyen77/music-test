import { Pipe, PipeTransform } from 'angular2/core';
import { Album } from './album.model';

@Pipe({
  name: "shopping",
  pure: false
})

export class ShoppingPipe implements PipeTransform {
  transform(input: Album[], args) {
    var shoppingFilter = args[0];
    if (shoppingFilter === "true") {
      return input.filter((album) => {
        return album.cart;
      });
    } else {
      return input;
    }
  }
}
