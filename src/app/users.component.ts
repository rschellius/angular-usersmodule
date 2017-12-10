import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: []
})
export class UsersComponent implements OnInit {

  title = 'Users component';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
