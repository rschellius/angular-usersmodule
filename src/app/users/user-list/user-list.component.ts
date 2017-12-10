import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../../users.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styles: []
})
export class UserListComponent implements OnInit, OnDestroy {
  title = 'Users';
  users: User[];
  subscription: Subscription;

  constructor(
    private userService: UsersService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.subscription = this.userService.usersChanged
      .subscribe((users: User[]) => {
        this.users = users;
      });
    this.users = this.userService.getUsers();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onNewUser() {
    console.error('Not implemented yet!');
  }
}
