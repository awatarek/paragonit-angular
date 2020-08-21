import { Injectable, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class DbconnectService implements OnInit{
  db = firebase.firestore();
  constructor() { }

  ngOnInit(){
  }

  public showData(collection: string, doc: string): any{
    let data = this.db.collection(collection).doc(doc);
    data.onSnapshot(snap => {
      let dataContent = snap.data();
      console.log(dataContent);
      return dataContent;
    });
  }
}
