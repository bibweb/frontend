import {Component, Input} from '@angular/core';

import {Book} from '../model';

@Component({
  selector: 'app-books-searchable-list',
  templateUrl: './books-searchable-list.component.html'
})
export class BooksSearchableListComponent {

  public searchString: string;

  @Input()
  books: Book[];

}
