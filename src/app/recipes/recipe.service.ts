import { EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';
import { Recipe } from './recipe.model';

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes : Recipe[] =[
        new Recipe( "A test recipe", 
                    "A description", 
                    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872",
                    [new Ingridient('bread', 1 ), new Ingridient('eggs', 3), new Ingridient('sugar', 100)]
                    ),
        new Recipe( "A test recipe2", 
                    "A description2", 
                    "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872",
                    [new Ingridient('apple', 2), new Ingridient('meat', 1 ), new Ingridient('sugar', 100)]),
    
      ];

      getRecipe(){
          //to return a new array that is an exact copy of the variable
          return this.recipes.slice();
      }
    
}