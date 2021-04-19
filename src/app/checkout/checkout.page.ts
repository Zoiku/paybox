import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ModalController } from '@ionic/angular';
import { PaymentPage } from '../payment/payment.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {
 
  constructor(private cart:CartService, private modalCtrl:ModalController) { }

  ngOnInit() {}

  async showModal() {
    const modal = await this.modalCtrl.create({
      component: PaymentPage
    })

    await modal.present();
  }

}
