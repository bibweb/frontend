import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LoginComponent} from './login/login.component';
import {AuthGuard} from './auth-guard';
import {RoleGuard} from './role-guard';
import {BooksComponent} from './books/books.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDetailComponent} from './book-detail/book-detail.component';
import {BookrequestsComponent} from './bookrequests/bookrequests.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';

import {UserRoles} from './model/userRoles';
import {ForbiddenPageAccessComponent} from '@app/forbidden-page-access/forbidden-page-access.component';
import {SignUpComponent} from '@app/sign-up/sign-up.component';
import {UsersComponent} from '@app/users/users.component';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'forbidden', component: ForbiddenPageAccessComponent},

  // User routes
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: 'books', component: BooksComponent},
      {path: 'bookrequests', component: BookrequestsComponent},
      {path: 'bookrequests/new', component: BookrequestsCreateComponent},
      {path: 'bookrequests/:id', component: BookrequestsDetailComponent},
      {path: 'books/:id', component: BookDetailComponent}
    ]
  },

  // Admin routes
  {
    path: '', canActivate: [AuthGuard, RoleGuard], data: {expectedRole: UserRoles.ADMIN}, children: [
      {path: 'books/:id/update', component: BookUpdateComponent},
      {path: 'users', component: UsersComponent}
    ]
  },


  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
