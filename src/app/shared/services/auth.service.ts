import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import { Observable, of } from 'rxjs';
import { switchMap, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;

  constructor(
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private router: Router
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

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return [this.updateUserData(credential.user),
        this.router.navigate(['/panel'])]

  }
  
  async signOut(){
    await this.afAuth.signOut();
    return this.router.navigate(['/login']);
  }

  private updateUserData({ uid, email, displayName, imagesID}: User) {const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${uid}`);

    const data: User = { 
      uid, 
      email, 
      displayName
    } 

    return userRef.set(data, { merge: true })

  }
}

export interface User {
  uid: string;
  email: string;
  displayName?: string;
  imagesID?: number[]
}