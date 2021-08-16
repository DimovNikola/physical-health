import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { recipes } from '..//..//assets/data/recipes';
import { Recipe } from '..//..//assets/models/Recipe';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {

  recipes: Recipe[];
  id: string;
  item: any;

  constructor(private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.recipes = [...recipes];
  }

  saveItem() {
    let name = (<HTMLInputElement>document.getElementById('name')).value;
    let calories = (<HTMLInputElement>document.getElementById('calories')).value;
    let description = (<HTMLInputElement>document.getElementById('description')).value;
    let ingredients = (<HTMLInputElement>document.getElementById('ingredients')).value;
    let imageUrl = (<HTMLInputElement>document.getElementById('imageUrl')).value;
    let lastId = recipes[recipes.length - 1].getId();
    var newRecipe = new Recipe(lastId + 1, name, +calories, description, ingredients, imageUrl);

    let exists = recipes.some(x => x.getName() === name);

    if(exists) {
      return;
    }
    else{
      recipes.push(newRecipe);
      this.recipes = [...recipes];
    }
  }
}
