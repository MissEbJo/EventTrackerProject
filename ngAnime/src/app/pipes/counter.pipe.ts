import { Pipe, PipeTransform } from '@angular/core';
import { Anime } from '../models/anime';

@Pipe({
  name: 'counter'
})
export class CounterPipe implements PipeTransform {

  transform(animes: Anime[]): any {
    let count: number = 0;
    for (let anime of animes){
      count += anime.id;
    }
    return count; // not working for some reason, research answer some more
  }
}
