import { Component , Output , Input , EventEmitter } from '@angular/core';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe.html',
  styleUrls: ['./recipe.scss']
})

export class RecipeList {
  title: string = 'app';
  @Output()
      selectedPizza = new EventEmitter<Pizza>();
  @Input()
      toppings;
  constructor(
  ){

  }

  selectPizza(pizza: Pizza){
    this.selectedPizza.emit(pizza);
  }

  
}

interface Pizza {
    name: string,
    toppings: string[]
}
