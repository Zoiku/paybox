import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username:string = '';
  password:string = '';
  isSuccess:boolean = false;
  attempts:number = 5;
  isDisable:boolean = false;

  constructor() {}

  validate() {
    if(this.attempts > 0 ) {
      this.attempts = this.attempts - 1;
      if(this.username == "admin" && this.password == "admin") {
        this.isSuccess = true;
        location.href = "/shop"
      } else {
        this.isSuccess = false;
      }
    }else {
      this.isDisable = true;
      setTimeout(()=> {
        this.isDisable = false;
        this.username = null;
        this.password = null;
        this.attempts = 5;
      }, 10000)
    }
  }

}
