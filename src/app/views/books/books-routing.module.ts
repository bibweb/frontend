import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '@app/core';
import {RoleGuard} from '@app/core';
import {UserRoles} from '@app/core';

import {BookUpdateComponent} from './book-update/index';
import {BooksComponent} from './books/index';
import {BookDetailComponent} from './book-detail/index';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: '', component: BooksComponent},
      {
        path: ':id', children: [
          {path: '', component: BookDetailComponent},
          {path: 'update', canActivate: [RoleGuard], component: BookUpdateComponent, data: {expectedRole: UserRoles.ADMIN}}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BooksRoutingModule {
}
