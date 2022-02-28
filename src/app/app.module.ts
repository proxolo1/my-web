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
  apiKey: "AIzaSyDqeIeHdTodMCizOlA6uAxn7S0qAT7h3Ws",
  authDomain: "proxoloo.firebaseapp.com",
  projectId: "proxoloo",
  storageBucket: "proxoloo.appspot.com",
  messagingSenderId: "256159945638",
  appId: "1:256159945638:web:45388f7e0073d3cf523567",
  measurementId: "G-TTMHVYJPXE"
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
