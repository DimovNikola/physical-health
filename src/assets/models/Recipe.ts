export class Recipe {

  id: number;
  name: string;
  calories: number;
  description: string;
  imageUrl: string;
  ingredients: string;

  constructor(id: number, name: string, calories: number, description: string, ingredients: string, imageUrl: string) {
    this.id = id;
    this.name = name;
    this.calories = calories;
    this.description = description;
    this.ingredients = ingredients;
    this.imageUrl = imageUrl;
  }

  getName() {
    return this.name;
  }

  getCalories() {
    return this.calories;
  }

  getDescription() {
    return this.description;
  }

  getIngredients() {
    return this.ingredients;
  }

  getImageUrl() {
    return this.imageUrl;
  }

  getId() {
    return this.id;
  }
}
