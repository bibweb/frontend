import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'books', loadChildren: './views/books/books.module#BooksModule'},
  {path: 'bookrequests', loadChildren: './views/bookrequests/bookrequests.module#BookrequestsModule'},
  {path: 'users', loadChildren: './views/users/users.module#UsersModule'},
  {path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
