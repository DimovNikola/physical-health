import { Injectable } from '@angular/core';
import { User } from 'src/assets/models/User';

@Injectable()
export class UserService {
  currentUser: User;

  constructor() { }

  registeredUser(user: User) {
    this.currentUser = user;
  }

  getRegisteredUser() {
    return this.currentUser;
  }
}
