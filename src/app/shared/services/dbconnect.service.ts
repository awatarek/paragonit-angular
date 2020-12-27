import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbconnectService implements OnInit{
  db = firebase.firestore();
  public ReceiptNumber;
  constructor(private auth: AuthService) { }

  async ngOnInit(){
  }

  public async showData(collection: string, doc: string): Promise<any>{
    let data = await this.db.collection(collection).doc(doc);
    return new Promise(resolve => {
      data.onSnapshot(async snap => {
        resolve(snap.data());
      })
    });
  }

  public async getReceipt(){
    return await this.showData('receipt', await this.auth.getUserUId());
  }

  public async getSubscription(){
    return await this.showData('subscription', await this.auth.getUserUId());
  }

  public async postReceipt(formGroup){
    await this.getReciptNumber()
    let location = this.db.collection('receipt').doc(await this.auth.getUserUId());
    location.set({
        [this.ReceiptNumber]: {
          name: formGroup.name,
          description: formGroup.description,
          price: formGroup.price,
          receiptIndex: this.ReceiptNumber,
        },
        receiptIndex: this.ReceiptNumber,
      }, { merge: true })
    }

    public async postTest(){
      let location = this.db.collection('subscription').doc(await this.auth.getUserUId());
      let numberOf = 1;
      location.set({
        activeTo: new Date(),
        numberOf: 1,
        [numberOf]: {
          date: new Date(),
          currency: "pln",
          id: "hehee",
          recipt: null,
        }
      }, { merge: true })
      }

    private async getReciptNumber() {
      if(
        await this.showData('receipt', await this.auth.getUserUId())
      ){
      this.ReceiptNumber = await this.showData('receipt', await this.auth.getUserUId());
      this.ReceiptNumber = this.ReceiptNumber.receiptIndex + 1;
      if(!this.ReceiptNumber){
        this.ReceiptNumber = 0;
      }

      return this.ReceiptNumber
      } else {
        this.ReceiptNumber = 0;
        return this.ReceiptNumber;
      }
    }

    public async removeReceipt(event){
      const doc = await this.auth.getUserUId();
      const id = event.receiptIndex;
      const receipts = this.db.collection('receipt').doc(doc);
      receipts.update({
        [id]: firebase.firestore.FieldValue.delete(),
      }).catch(err =>
        console.log(err)
      );
    }

    public async updateReceipt(formGroup){
      await this.getReciptNumber()
      let location = this.db.collection('receipt').doc(await this.auth.getUserUId());
      location.set({
          [formGroup.receiptIndex]: {
            name: formGroup.name,
            description: formGroup.description,
            price: formGroup.price,
            receiptIndex: formGroup.receiptIndex,
          },
        }, { merge: true })
    }
}
