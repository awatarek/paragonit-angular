import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DbconnectService implements OnInit{
  db = firebase.firestore();
  constructor(public auth: AuthService) { }

  ngOnInit(){
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
    return await this.showData('recipe', await this.auth.getUserUId());
  }
}
