import { Component } from '@angular/core';

@Component({
  selector: 'dashboard-component',
  templateUrl: './dashboard.html',
})

export class DashboardComponent {
  title = 'app';
  // pizzas: Pizza[] = [
  //   { name: 'New Yorker', toppings: ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms'] },
  //   { name: 'Hot & Spicy', toppings: ['Jalapenos', 'Herbs', 'Pepperoni', 'Chicken'] },
  //   { name: 'Hawaiian', toppings: ['Ham', 'Pineapple', 'Sweetcorn'] }
  // ];
  toppings: string[] = ['Bacon', 'Pepperoni', 'Ham', 'Mushrooms', 'Jalapenos', 'Herbs', 'Chicken','Pineapple', 'Sweetcorn' ];
  constructor(
  ){

  }
  pizzaSelected(pizza){
    console.log("here ", pizza);
  }
  
}


// interface Pizza {
//     name: string,
//     toppings: string[]
// }