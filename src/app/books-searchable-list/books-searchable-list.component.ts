import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Book} from '@app/model/book';

@Component({
  selector: 'app-books-searchable-list',
  templateUrl: './books-searchable-list.component.html',
  styleUrls: ['./books-searchable-list.component.css']
})
export class BooksSearchableListComponent {

  public searchString: string;

  @Input()
  books: Book[];

}
