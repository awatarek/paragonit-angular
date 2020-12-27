import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{
  db = firebase.firestore();
  user$: Observable<User>;


  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router,
  ) { 
    this.user$ = this.afAuth.authState.pipe(
      switchMap( user => {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null)
        }
      })
    )
  }

  async ngOnInit() {
  }

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return [this.updateUserData(credential.user),
        this.router.navigate(['/panel'])]
  }
  
  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/']);
  }

  private loginState(){
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  async returnLoginState(){
    const user = await this.loginState();
    if(user){
      return true;
    } else {
      return false;
    }
  }

  public async getUserUId(){
    return (await this.afAuth.currentUser).uid;
  }

  public async getUserEmail(){
    return (await this.afAuth.currentUser).email;
  }

  private updateUserData({ uid, email, displayName, firstTime}: User) {const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);
    const data: User = { 
      uid, 
      email, 
      displayName,
    } 

    return userRef.set(data, { merge: true });
  }

  public createSettings(uid){
    this.createTable('subscription',uid),
    this.createTable('settings',uid)
  }

  public createTable(collection: string, doc: string){
    switch(collection){
      case 'subscription':
          this.db.collection(collection).doc(doc).set({
            activeTo: new Date(),
            numberOf: 1,
            typeOfSubscription: 0
          })
          break;
      case 'settings':
        this.db.collection(collection).doc(doc).set({
            firstTime: false,
          })
          break;
      }
  }
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  firstTime?: boolean;
}