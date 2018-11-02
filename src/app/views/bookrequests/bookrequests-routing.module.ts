import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AuthGuard} from '@app/core';
import {BookrequestsListComponent} from './bookrequest-list/bookrequests-list.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';


const routes: Routes = [
  {
    path: '', canActivate: [AuthGuard], children: [
      {path: '', component: BookrequestsListComponent},
      {path: 'new', component: BookrequestsCreateComponent},
      {path: ':id', component: BookrequestsDetailComponent},
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
export class BookrequestsRoutingModule {
}
