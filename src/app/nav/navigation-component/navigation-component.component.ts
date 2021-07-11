import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-bar',
  templateUrl: './navigation-component.component.html',
  styleUrls: ['./navigation-component.component.css']
})
export class NavigationComponent implements OnInit {

  clicked: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayMenu() {
    document.getElementById("navbarNav")!.classList.toggle("show");
  }

}
