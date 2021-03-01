import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[]= [new Ingridient('apple', 10), new Ingridient ('egg', 6)];
  constructor() { }

  ngOnInit(): void {
  }

  onIngridientTBA(ingridient: Ingridient){
    this.ingridients.push(ingridient);
  }
}
