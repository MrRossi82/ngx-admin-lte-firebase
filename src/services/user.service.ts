import { User } from '../models/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class UserService {
  private current: ReplaySubject<User> = new ReplaySubject<User>(1);

  // Called when logout
  public logoutAction: Function;

  // Called when profile
  public profileAction: Function;

  constructor(private router: Router) {}

  public setCurrent(user: User) {
    this.current.next(user);
  }

  public getCurrent() {
    return this.current;
  }

  public logout() {
    if (this.logoutAction) {
      this.logoutAction();
    } else {
      const user = new User();
      user.connected = false;
      this.setCurrent(user);
      this.router.navigate(['login']);
    }
  }

  public profile() {
    if (this.profileAction) {
      this.profileAction();
    }
  }
}
