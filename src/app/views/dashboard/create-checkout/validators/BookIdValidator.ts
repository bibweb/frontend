import {Injectable} from '@angular/core';
import {BookService} from '@app/views/books/services';
import {FormControl} from '@angular/forms';

@Injectable()
export class BookIdValidator {
  constructor(private bookService: BookService) {}

  checkBookIdIsValid(control: FormControl): any {
    if(isNaN(+control.value)) {
      return {'bookIdDoesNotExist': {value: control.value}};
    }
    return (this.bookService.bookIds.includes(+control.value)) ? null : {'bookIdDoesNotExist': {value: control.value}};
  }

}
