import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbconnectService implements OnInit{
  db = firebase.firestore();
  public ReceiptNumber;
  public newReceiptArray;
  public ReceiptArray: Array<any>;
  constructor(public auth: AuthService) { }

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
}
