import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UsersService } from '../users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styles: []
})
export class UsersDashboardComponent implements OnInit, OnDestroy {
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
}
