import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth-guard';
import {BooksComponent} from './books/books.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookrequestsComponent} from './bookrequests/bookrequests.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  {path: 'books', component: BooksComponent, canActivate: [AuthGuard]},
  {path: 'books/:id', component: BookDetailComponent, canActivate: [AuthGuard]},
  {path: 'bookrequests', component: BookrequestsComponent, canActivate: [AuthGuard]},
  {path: 'bookrequests/new', component: BookrequestsCreateComponent, canActivate: [AuthGuard]},
  {path: 'bookrequests/:id', component: BookrequestsDetailComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
