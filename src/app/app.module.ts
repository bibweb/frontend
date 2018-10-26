import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {CustomHttpInterceptor} from './custom-http-interceptor.service';

import {AppComponent} from './app.component';
import {BooksComponent} from './books/books.component';
import {AppRoutingModule} from './app-routing.module';
import {BookUpdateComponent} from './book-update/book-update.component';
import {LoginComponent} from './login/login.component';
import {NavbarMenuComponent} from './navbar-menu/navbar-menu.component';
import {AuthGuard} from './auth-guard';
import {RoleGuard} from './role-guard';
import {BookrequestsComponent} from './bookrequests/bookrequests.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';
import {HasRoleDirective} from './directive/has-role.directive';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BooksListComponent} from './books-list/books-list.component';
import {BooksSearchableListComponent} from './books-searchable-list/books-searchable-list.component';
import {BookListSearchPipe} from './books-searchable-list/book-list-search.pipe';
import {BookListAvailabilityPipe} from './books/book-list-availability.pipe';
import {ForbiddenPageAccessComponent} from './forbidden-page-access/forbidden-page-access.component';
import {MessagesComponent} from './messages/messages.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {BookActionsComponent} from './book-actions/book-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookUpdateComponent,
    LoginComponent,
    NavbarMenuComponent,
    BookrequestsComponent,
    BookrequestsDetailComponent,
    BookrequestsCreateComponent,
    HasRoleDirective,
    BookDetailComponent,
    BooksListComponent,
    BooksSearchableListComponent,
    BookListSearchPipe,
    BookListAvailabilityPipe,
    ForbiddenPageAccessComponent,
    MessagesComponent,
    SignUpComponent,
    BookActionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: CustomHttpInterceptor,
    multi: true
  },
    AuthGuard,
    RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
