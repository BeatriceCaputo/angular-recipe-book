import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.model';

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
  
  @Output() ingridientTBA = new EventEmitter<Ingridient>();

  constructor() { }

  ngOnInit(): void {
  }
  onAddButton(){
     this.ingridientTBA.emit(new Ingridient(this.name.nativeElement.value, this.amount.nativeElement.value));
   
    // this.ingridientTBA.emit(new Ingridient(this.name, this.amount));

  }

}
