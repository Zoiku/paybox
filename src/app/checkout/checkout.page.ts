import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {


  constructor(public activated_route:ActivatedRoute) { }

  ngOnInit() {
    let checkout_items:Array<object> = JSON.parse(this.activated_route.snapshot.paramMap.get('cart'));
    console.log(checkout_items);
  }

}
