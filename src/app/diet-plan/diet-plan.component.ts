import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '..//..//assets/models/Recipe';
import { recipes } from '../../assets/data/recipes';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css']
})
export class DietPlanComponent implements OnInit {

  recipes: Recipe[];

  constructor() {
  }

  ngOnInit(): void {
    this.getData();
  }


  getData() {
    this.recipes = [...recipes];
  }
}
