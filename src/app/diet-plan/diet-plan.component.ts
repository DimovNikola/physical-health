import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Recipe } from 'src/assets/models/Recipe';
import { recipes } from '../../assets/data/recipes';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {

  recipes: Recipe[];

  constructor(private router: Router) {
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.getData();
      }
    });
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.recipes = [...recipes];
  }
}
