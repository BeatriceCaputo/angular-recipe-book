import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';
import { Ingridient } from '../shared/ingridient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {

  ingridients : Ingridient[];
  
  constructor(private slService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingridients = this.slService.getIngridients();
  }

  
}
