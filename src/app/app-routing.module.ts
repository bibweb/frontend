import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {LoggedInGuard} from './loggedin-guard';
import {BooksComponent} from './books/books.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookrequestsComponent} from './bookrequests/bookrequests.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'books', component: BooksComponent, canActivate: [LoggedInGuard]},
  {path: 'books/:id', component: BookDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'bookrequests', component: BookrequestsComponent, canActivate: [LoggedInGuard]},
  {path: 'bookrequests/new', component: BookrequestsCreateComponent, canActivate: [LoggedInGuard]},
  {path: 'bookrequests/:id', component: BookrequestsDetailComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
