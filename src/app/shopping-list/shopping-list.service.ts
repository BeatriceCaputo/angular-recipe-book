import { EventEmitter } from '@angular/core';
import { Ingridient } from '../shared/ingridient.model';

export class ShoppingListService{
   
    private ingridients : Ingridient[] = [
        new Ingridient('apple', 10), 
        new Ingridient('egg', 6)];

    getIngridients(){
        return this.ingridients;
    }

    addIngridient(ing : Ingridient){
        this.ingridients.push(ing);

    }

}