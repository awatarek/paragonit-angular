import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { loadStripe } from '@stripe/stripe-js';
import { AuthService, DbconnectService } from 'src/app/shared';
import { MatDialogActions } from '@angular/material/dialog';
@Component({
  selector: 'panel-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.scss']
})
export class FinanceComponent implements OnInit{
  public PUBLISHABLE_KEY = 'pk_test_51Hv3FDIiaaMvr11yzM0gbkFO7CobR1yTf4WXGqXuJAb48scTBw7GV7fXzUAS9j63x771B1SNS4eaKgbeCmrBe77a007TjPVf6A';
  public domain;
  public data;
  public loaded = false;
  public settings;
  async ngOnInit(){
    await this.getSettings();
    await this.getData();
    this.loaded = true;
  }
  constructor(
    public dialog: MatDialog,
    private auth: AuthService, private db: DbconnectService){
  }

  async checkout() {
    window.location.hostname == 'localhost' ? this.domain = 'http://localhost:4200/panel/finance' : this.domain = 'https://paragonit.pl/panel/finance';
    let SUBSCRIPTION_BASIC_PLAN_ID;
    switch(this.settings.typeOfSubscription){
      case 0:
        SUBSCRIPTION_BASIC_PLAN_ID ='price_1HxbPmIiaaMvr11yMIen3iIf';
        break;
      case 1:
        SUBSCRIPTION_BASIC_PLAN_ID = 'price_1I2dArIiaaMvr11yyxGsldHG';
        break;
      case 2:
        SUBSCRIPTION_BASIC_PLAN_ID = 'price_1I2dArIiaaMvr11yacj8tQT2';
        break;
    }

    const stripe = Stripe(this.PUBLISHABLE_KEY);
    let customerEmail = await this.auth.getUserEmail();
    try {
      const stripe = await loadStripe(this.PUBLISHABLE_KEY);
      stripe.redirectToCheckout({
        items: [{plan: SUBSCRIPTION_BASIC_PLAN_ID, quantity: 1}],
        successUrl:
          this.domain +
          '/success?payment={CHECKOUT_SESSION_ID}',
        cancelUrl: this.domain + '/canceled',
        clientReferenceId: customerEmail,
        customerEmail: customerEmail,
        
      }).then( result => console.log(result) );
    } catch (error) {
      console.error('checkout() try catch error', error);
    }
    
  }

  public async getData(){
    this.data = await this.db.showData('subscription', await this.auth.getUserUId());
  }

  public getDateOfPayment(){
    let temp = new Date(1970, 0 ,1);
    temp.setUTCSeconds(this.data.activeTo.seconds);
    return `${temp.getDay()}-${temp.getMonth() + 1}-${temp.getFullYear()}`;
  }

  public changeToDate(date){
    let temp = new Date(1970, 0 ,1);
    temp.setUTCSeconds(date);
    return `${temp.getDay()}-${temp.getMonth() + 1}-${temp.getFullYear()}`;
  }

  handleResult(result) {
    console.log('handleResult()', result);
  }

  public async changeSub(){
    const dialogRef = this.dialog.open(SubChange);

    dialogRef.afterClosed().subscribe(async result => {
      let temp = parseInt(result);
      this.db.db.collection('settings').doc(await this.auth.getUserUId()).set({
        typeOfSubscription: temp
      },{merge: true});
      this.getSettings();
      this.typeTranslator(this.settings);
    });
  }

  public async getSettings(){
    this.settings = await this.db.showData('settings',await this.auth.getUserUId());
  }

  public typeTranslator(settings){
    if( settings.typeOfSubscription == 0){
      return 'Co miesiąc';
    } else if( settings.typeOfSubscription == 1){
      return 'co 6 miesięcy'
    } else {
      return 'co rok'
    }
  }

  public cancel(){}

}

@Component({
  selector: 'sub-change',
  templateUrl: 'sub-change.html',
})
export class SubChange {
  @Inject(MAT_DIALOG_DATA) public data: number;
}