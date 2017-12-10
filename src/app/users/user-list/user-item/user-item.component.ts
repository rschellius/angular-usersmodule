import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../../models/user.model';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-user-item]',
  templateUrl: './user-item.component.html',
  styles: []
})
export class UserItemComponent implements OnInit {

  @Input('user') user: User;
  @Input() index: Number;

  constructor() { }

  ngOnInit() {
  }

}
