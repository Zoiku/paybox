import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  pizzas:Array<object> = [
    {name: "Margherita", price: 20, imgUrl:'../../assets/Margherita.jpg'},
    {name: "Double Cheese Margherita", price: 30, imgUrl:'../../assets/Double_Cheese_Margherita.jpg'},
    {name: "Deluxe Veggie", price: 10, imgUrl:'../../assets/Deluxe_Veggie.jpg'},
    {name: "Cheese n Corn", price: 20, imgUrl:'../../assets/Corn_&_Cheese.jpg'},
    {name: "Veggie Paradise", price: 20, imgUrl:'../../assets/Veggie_Paradise.jpg'},
  ];
  isDisable:boolean = true;

  cart: Array<object> = [];

  cost:number;

  constructor() {}

  add(item:object) {
    this.cart.push(item);
    this.cost = this.cart.map(item => item['price']).reduce((total, number) => total + number, 0);
  }

  clearcart() {
    this.cart.length = 0;
    this.cost = 0;
  }
}
