import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {BooksComponent} from './books/index';
import {BooksListComponent} from './books-list/index';
import {BookListSearchPipe, BookListAvailabilityPipe} from './pipes/index';
import {BooksSearchableListComponent} from './books-searchable-list/index';
import {BookDetailComponent} from './book-detail/index';
import {BookActionsComponent} from './book-actions/index';
import {BookUpdateComponent} from './book-update/index';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '@app/shared';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  declarations: [
    BooksComponent,
    BooksListComponent,
    BookListSearchPipe,
    BooksSearchableListComponent,
    BookDetailComponent,
    BookActionsComponent,
    BookUpdateComponent,
    BookListAvailabilityPipe
  ]
})
export class BooksModule {
}
