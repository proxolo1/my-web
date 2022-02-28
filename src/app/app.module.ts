import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { HireMeComponent } from './components/hire-me/hire-me.component';
import { AuthComponent } from './components/auth/auth.component';
import {AngularFireAuthModule} from '@angular/fire/auth'
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import{ AngularFirestoreModule } from '@angular/fire/firestore'

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "o",
  storageBucket: "m",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    HireMeComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), 
    AngularFireAuthModule, BrowserAnimationsModule,MatDialogModule
    ,AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
