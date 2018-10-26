import {Pipe, PipeTransform} from '@angular/core';
import {Book} from '@app/model/book';
import {BookAvailabilityState} from '@app/model/bookAvailabilityState';

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
