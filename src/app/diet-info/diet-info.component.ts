import { Component, OnInit } from '@angular/core';
import { Recipe } from '..//..//assets/models/Recipe';
import { recipes } from '..//..//assets/data/recipes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-diet-info',
  templateUrl: './diet-info.component.html',
  styleUrls: ['./diet-info.component.css']
})
export class DietInfoComponent implements OnInit {

  recipes: Recipe[];
  id: string;
  item: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.getItem();
  }

  getData() {
    this.recipes = [...recipes];
  }

  getItem() {
    this._activatedRoute.paramMap.subscribe(params => {
      this.id = params.get("id")!;
    });
    for(let activity of recipes) {
      if(activity.getId() == +this.id) {
        this.item = activity;
      }
    }
  }

  deleteItem() {
    recipes.forEach((element, index) => {
      if(element == this.item) {
        recipes.splice(index, 1);
      }
    });
  }

}
