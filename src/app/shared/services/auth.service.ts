import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';
import { DbconnectService } from './dbconnect.service';
import * as firebaseFunction from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit{

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

  ngOnInit() {
  }

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider)
    return [this.updateUserData(credential.user),
        this.router.navigate(['/panel'])]
  }

  /*async facebookSignin(){
    const provider = new auth.FacebookAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider).then(function(result): any{
      this.updateUserData(credential.user),
      this.router.navigate(['/panel'])
    }).catch(async error =>{
      console.log(error)
        this.afAuth.fetchSignInMethodsForEmail(error.email)
        .then(info =>{
          console.log(info);
        })
        if(error.code == 'auth/account-exists-with-different-credential'){
          
        }
      });
  }*/
  
  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/login']);
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

  private updateUserData({ uid, email, displayName, imagesID}: User) {const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data: User = { 
      uid, 
      email, 
      displayName,
      /*imagesID*/
    } 

    return userRef.set(data, { merge: true });
  }
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  imagesID?: number[]
}