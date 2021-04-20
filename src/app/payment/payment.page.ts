import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { HTTP } from '@ionic-native/http/ngx';
import {AlertController, NavController} from '@ionic/angular';
import{Router,NavigationExtras} from '@angular/router';
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
  id:any;
  responseData:any={};

  constructor(private modalCtrl:ModalController,private router: Router, private cart: CartService, private http:HTTP,private alertctrl:AlertController ) { }

  async close() {
    await this.modalCtrl.dismiss();
  }

  ngOnInit() {}

  async pay() {

    try {
      let msg = await this.http.post(`https://www.paybox.com.co/pay?amount=${this.amount}&currency=${this.currency}&mode=${this.mode}&mobile_network=${this.mobile_network}&mobile_number=${this.mobile_number}&voucher_code=1234&payload={}&order_id=PB_12345`, {}, {
        Authorization: 'Bearer 905ea86a-1935-4e4d-9718-7f3e0a774d72'
      }).then(data=>{
        this.responseData=JSON.parse(data.data);
      })
      this.id=this.responseData.token;

      if(this.id =="undefined"){
        await this.alertctrl.create({
          header:'Failed',
          subHeader:'Transaction failed. Please try again later',
          buttons:[{
            text:"Okay",
            handler:()=>{
              this.router.navigate(['/payment']);
            }
          }]
        }).then((confirmElement)=>{
          confirmElement.present()
        })
      }
      else{
        await this.alertctrl.create({
            header:'Success',
            subHeader:'Transaction was successful',
            buttons:[{
              text:"Okay",
              handler:()=>{
                this.router.navigate(['/home']);
              }
            }]
          }).then((confirmElement)=>{
            confirmElement.present()
          })
  
        }
      }
      catch (error) {
        console.log(error);
      }
    } 
  }

