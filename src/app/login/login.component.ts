import { Component, OnInit, Output } from '@angular/core';
import {users} from '../../assets/data/users';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/userService';
import { User } from '..//..//assets/models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    let user = users.get(this.userEmail);
    if(user == null) {
      // error page
    }
    else{
      this.userService.registeredUser(user);
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      }
      this.router.navigate(["/home"]);
    }
  }

}
