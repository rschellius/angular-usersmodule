import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UsersService } from './users.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersInternalComponent } from './users/users-internal.component';
import { UsersServiceConfigModule } from './users.service.config';
import { CONFIG } from './config/config';
import { Http } from '@angular/http';

@NgModule({
  declarations: [
    UsersComponent,
    UsersInternalComponent,
    UserListComponent,
    UserDetailComponent,
    UserEditComponent,
    UserItemComponent,
    UsersDashboardComponent
  ],
  imports: [
    // CommonModule,
    BrowserModule,
    AppRoutingModule,
    UsersServiceConfigModule
  ],
  // providers: [{
  //   provide: UsersService, // Register your service in the DIC the one that performs the requests to that server endpoint,
  //   // useFactory: (config, http: Http) => new UsersService(config, http),
  //   useFactory: function (config: any, http: Http) { return new UsersService(config, http); },
  //   deps: [
  //     CONFIG
  //   ]
  // }],
  providers: [UsersService],
  exports: [
    UsersComponent,
    UserDetailComponent,
    UserListComponent,
    UserEditComponent
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule {
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: UsersModule,
  //     // providers: [UsersService]
  //     providers: [{
  //       provide: UsersService, // Register your service in the DIC the one that performs the requests to that server endpoint,
  //       // useFactory: (config, http: Http) => new UsersService(config, http),
  //       useFactory: function (config: any, http: Http) { return new UsersService(config, http); },
  //       deps: [
  //         CONFIG
  //       ]
  //     }]
  //   };
  // }
}
