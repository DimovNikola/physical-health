import { Component, OnInit } from '@angular/core';
import { Recipe } from '..//..//assets/models/Recipe';
import { recipes } from '..//..//assets/data/recipes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent implements OnInit {

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
    for(let recipe of recipes) {
      if(recipe.getId() == +this.id) {
        this.item = recipe;
      }
    }
  }

  saveItem() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let calories = (<HTMLInputElement>document.getElementById('calories')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let ingredients = (<HTMLInputElement>document.getElementById('ingredients')).value;
    let imageUrl = (<HTMLInputElement>document.getElementById('imageUrl')).value;

    var newRecipe = new Recipe(this.item.getId(), name, +calories, description, ingredients, imageUrl);

    let objIndex = recipes.findIndex((obj => obj.id == this.item.getId()));

    this.item = newRecipe;

    this.recipes = this.recipes.splice(objIndex, 1, this.item);
    recipes.splice(objIndex, 1, this.item);
  }

}
