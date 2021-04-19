import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {


  amount:number = this.cart.cost;
  currency:string = 'GHS';
  mode:string = '';
  mobile_network:string = '';
  mobile_number:string = '';

  constructor(private modalCtrl:ModalController, private cart: CartService, private http:HttpClient ) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

  async pay() {

    try {
      let msg = await this.http.post(`https://www.paybox.com.co/pay?amount=${this.amount}&currency=${this.currency}&mode=${this.mode}&mobile_network=${this.mobile_network}&mobile_number=${this.mobile_number}&voucher_code=1234&payload={}&order_id=PB_12345`, {
        headers: {
          'Authorization': "Bearer 905ea86a-1935-4e4d-9718-7f3e0a774d72"
        }
      }).toPromise();
    } catch (error) {
      console.log(error);
    }
  }
}
