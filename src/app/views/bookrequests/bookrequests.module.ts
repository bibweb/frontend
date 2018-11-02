import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookrequestsListComponent} from './bookrequest-list/bookrequests-list.component';
import {BookrequestsDetailComponent} from './bookrequests-detail/bookrequests-detail.component';
import {BookrequestsCreateComponent} from './bookrequests-create/bookrequests-create.component';
import {BookrequestsRoutingModule} from './bookrequests-routing.module';
import {SharedModule} from '@app/shared';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BookrequestsRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    BookrequestsListComponent,
    BookrequestsDetailComponent,
    BookrequestsCreateComponent
  ]
})
export class BookrequestsModule { }
