import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { LoginComponent } from './login/login.component';
import { LoggedInGuard } from './loggedin-guard';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'books', component: BooksComponent, canActivate: [LoggedInGuard] },
	{ path: 'detail/:id', component: BookDetailComponent, canActivate: [LoggedInGuard] },
	{ path: 'login', component: LoginComponent}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
