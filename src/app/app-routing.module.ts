import { UserEditComponent } from './users/user-edit/user-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UsersInternalComponent } from './users/users-internal.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';

const appRoutes: Routes = [
  {
    path: 'users', component: UsersComponent, children: [
      { path: '', component: UserListComponent },
      { path: 'dashboard', component: UsersDashboardComponent },
      { path: 'new', component: UserEditComponent },
      { path: ':id', component: UserDetailComponent },
      { path: ':id/edit', component: UserEditComponent }
    ]
  },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  {
    path: '**', redirectTo: '/users'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
