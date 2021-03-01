import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes-book';

  recipes: boolean = false;
  shoppingList: boolean = false;

  onPanelChoosen(panel:string){
    if (panel === "Recipies"){
      this.recipes = true; 
      this.shoppingList = false;
    }
    else if (panel === "Shopping List" ) {
      this.shoppingList = true ;
      this.recipes = false;
    }
   
  }
}
