import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {SharedModule} from '@app/shared';

import {BooksSearchableListComponent} from './books-searchable-list';
import {BookListSearchPipe, BookListAvailabilityPipe} from './pipes';
import {BooksRoutingModule} from './books-routing.module';
import {BooksListComponent} from './books-list';
import {BookDetailComponent} from './book-detail';
import {BookActionsComponent} from './book-actions';
import {BookUpdateComponent} from './book-update';
import {BooksComponent} from './books';

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
    BooksSearchableListComponent,
    BookDetailComponent,
    BookActionsComponent,
    BookUpdateComponent,
    BookListSearchPipe,
    BookListAvailabilityPipe
  ]
})
export class BooksModule {
}
