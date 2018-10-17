import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth-guard';
import {RoleGuard} from './role-guard';
import {BooksComponent} from './books/books.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookrequestsComponent} from './bookrequests/bookrequests.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';

import {UserRoles} from './model/userRoles';

const routes: Routes = [
  {path: '', redirectTo: '/books', pathMatch: 'full'},
  
  // User routes
  {path: '', canActivate: [AuthGuard], children: [
  	  {path: 'books', component: BooksComponent},
	  	  {path: 'bookrequests', component: BookrequestsComponent},
	  {path: 'bookrequests/new', component: BookrequestsCreateComponent}
  ]},
  
  
  // Admin routes
  {path: '', canActivate: [AuthGuard, RoleGuard], data: {expectedRole: UserRoles.ADMIN}, children: [
	  {path: 'books/:id', component: BookDetailComponent},
	  {path: 'bookrequests/:id', component: BookrequestsDetailComponent}
  ]},
  

  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
