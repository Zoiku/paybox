import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
})
export class ShopPage implements OnInit {

  pizzas:Array<object> = [
    {name: "Margherita", price: 20, imgUrl:'../../assets/Margherita.jpg'},
    {name: "Double Cheese Margherita", price: 30, imgUrl:'../../assets/Double_Cheese_Margherita.jpg'},
    {name: "Deluxe Veggie", price: 10, imgUrl:'../../assets/Deluxe_Veggie.jpg'},
    {name: "Cheese n Corn", price: 20, imgUrl:'../../assets/Corn_&_Cheese.jpg'},
    {name: "Veggie Paradise", price: 20, imgUrl:'../../assets/Veggie_Paradise.jpg'},
  ];
  cart: Array<object> = [];
  isDisable:boolean = true;

  constructor(public router:Router) { }

  ngOnInit() {}

  add(item:object) {
    if(this.cart.length > 0) {
      this.isDisable = false;
    }else {
      this.isDisable = false;
    }
    this.cart.push(item);
  }

  checkout(){
    let checkout_items = JSON.stringify(this.cart);
    this.router.navigate(['checkout', checkout_items]);
  }
}
