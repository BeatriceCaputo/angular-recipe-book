import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  //name: string ;
  //amount: number;
  @ViewChild('ingName') name : ElementRef;
  @ViewChild('ingAmount') amount : ElementRef;
  
  constructor(private slService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddButton(){
    this.slService.addIngridient(new Ingridient(this.name.nativeElement.value, this.amount.nativeElement.value));
    // this.ingridientTBA.emit(new Ingridient(this.name, this.amount));

  }

}
