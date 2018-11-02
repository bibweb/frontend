import {Pipe, PipeTransform} from '@angular/core';
import {Book, BookAvailabilityState} from '../model';

@Pipe({
  name: 'bookListAvailabilityFilter'
})
export class BookListAvailabilityPipe implements PipeTransform {
  transform(items: Book[], states: BookAvailabilityState[]): any[] {
    return items.filter(book => {
      return states.includes(book.availability);
    });
  }
}
