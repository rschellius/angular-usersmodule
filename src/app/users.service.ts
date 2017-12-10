import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { User } from './models/user.model';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });
  private _endpointUrl: string;
  usersChanged = new Subject<User[]>();

  private users: User[] = [
    new User({
      firstname: 'Some',
      lastname: 'User',
      email: 'some.user@server.net',
      meta: {
        createdAt: new Date(),
        updatedAt: new Date()
      },
      roles: [
        'STUDENT'
      ]
    }),
    new User({
      firstname: 'Another',
      lastname: 'User',
      email: 'another.user@server.net',
      meta: {
        createdAt: new Date(),
        updatedAt: new Date()
      },
      roles: [
        'ADMIN'
      ]
    }),

  ];

  /**
   * 
   * @param http 
   */
  constructor(config: any, private http: Http) {
    this._endpointUrl = config.endpoint.service1.url;
    console.log('URL = ' + this._endpointUrl);
    this.readUsers();
  }

  /**
   * 
   */
  getUsers() {
    console.log('getUsers');
    return this.users.slice();
  }

  /**
   * 
   */
  private readUsers() {
    // console.log('readUsers');
    // this.http.get(this._endpointUrl + '/users')
    //   .map((response: Response) => {
    //     console.log('map');
    //     const users: User[] = response.json();
    //     return users;
    //   })
    //   .subscribe((users: User[]) => {
    //     console.log('subscribe');
    //     this.users = users;
    //     console.dir(this.users);
    this.usersChanged.next(this.users.slice());
    // });
  }

  /**
   * 
   * @param index 
   */
  getUser(index: number) {
    console.log('getUser[index]');
    // console.dir(this.users[index]);
    return this.users[index];
  }

  /**
   * 
   * @param User 
   */
  addUser(User: User) {
    console.log('addUser');
    this.http.post(this._endpointUrl + '/users', User, this.options)
      .map(response => response.json() as User)
      .subscribe(result => {
        this.users.push(result as User);
        this.usersChanged.next(this.users.slice());
      });
  }

  /**
   * 
   * @param index 
   * @param newUser 
   */
  updateUser(index: number, newUser: User) {
    console.log('updateUser');
    const _id = this.users[index]._id;
    this.http.put(this._endpointUrl + '/users/' + _id, newUser, this.options)
      .map((response: Response) => {
        const User: User = response.json();
        return User;
      })
      .subscribe((User) => {
        this.users[index] = User as User;
        this.usersChanged.next(this.users.slice());
      });
  }

  /**
   * 
   * @param index 
   */
  deleteUser(index: number) {
    console.log('deleteUser ' + this.users[index]._id);
    this.http.delete(this._endpointUrl + '/users/' + this.users[index]._id, this.options)
      .map(response => response.json() as User)
      .subscribe(User => {
        this.users.splice(index, 1);
        this.usersChanged.next(this.users.slice());
      });
  }
}
