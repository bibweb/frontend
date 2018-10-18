import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import {AuthInterceptor} from './auth-interceptor';

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
import { BookDetailComponent } from './book-detail/book-detail.component';

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
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
    AuthGuard,
    RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
