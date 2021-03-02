import { Component, Input, OnInit } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {

  }

  addToShoppingList(){
    this.recipe.getIngridients().forEach(
      (ingridient : Ingridient) => {
      this.slService.addIngridient(ingridient)
    });
    
  }

}
