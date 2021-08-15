import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userService';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css']
})
export class NavigationComponent implements OnInit {

  userRegistered: boolean;

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    let user = this.userService.getRegisteredUser();
    console.log(user);
    if(user == null) {
      this.userRegistered = false;
    }
    else {
      this.userRegistered = true;
    }
  }

  getUserEmail() {
    let userEmail = this.userService.getRegisteredUser().getEmail()
    console.log(userEmail);
    return userEmail;

  }
}
