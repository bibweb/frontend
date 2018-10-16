import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth-interceptor';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { LoggedInGuard} from './loggedin-guard';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    LoginComponent,
    NavbarMenuComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule
  ],
  providers: [ {
	provide: HTTP_INTERCEPTORS,
	useClass: AuthInterceptor,
	multi: true
  },
  LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
