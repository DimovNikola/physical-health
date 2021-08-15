import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/assets/models/User';
import {users} from '../../assets/data/users';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail: string;
  userPassword: string;

  constructor(private router: Router) {
  }



  ngOnInit(): void {
  }

  register() {
    let user = new User(this.userEmail, this.userPassword);
    users.set(user.getEmail(), user);
    this.router.navigate(["/login"]);
  }
}
