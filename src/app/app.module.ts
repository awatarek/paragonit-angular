import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingModule } from './landing';
import { SharedModule } from './shared';
import { LoginModule } from './login';
import { PanelModule } from './panel';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA7rxmmXCZfgGH_ZsesZxKahtiLcrqPggI",
  authDomain: "paragonit-cd004.firebaseapp.com",
  databaseURL: "https://paragonit-cd004.firebaseio.com",
  projectId: "paragonit-cd004",
  storageBucket: "paragonit-cd004.appspot.com",
  messagingSenderId: "597806922431",
  appId: "1:597806922431:web:e8d02c3534fd2af9f8a40a",
  measurementId: "G-6Q4ZPQ7KPS"
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LandingModule,
    SharedModule,
    LoginModule,
    PanelModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
