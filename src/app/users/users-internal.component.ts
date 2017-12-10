import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-internal',
  templateUrl: './users-internal.component.html',
  styles: []
})
export class UsersInternalComponent implements OnInit {

  title = 'Users component Internal';

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
