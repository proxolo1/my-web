import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth'
import {auth} from 'firebase/app'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private fAuth:AngularFireAuth) { }
  isEmailVerified: boolean = false
  ngOnInit(): void {
    let doubleClick = false;
    let home=document.querySelector('.home')
    home!.addEventListener("click",(e)=>{
      if(!doubleClick){
        doubleClick = true;
        setTimeout(()=>{
          doubleClick=false;
        },300)
        return;
      }
      e.preventDefault()
      this.router.navigate(['project'],{skipLocationChange:true})
     
    })
  }
  project(){
    this.userAuth('project')
  }
  hireMe(){
   
    console.log("working")
    this.userAuth('hire')
  }
  userAuth(data:string){
    // if(this.isEmailVerified || localStorage.getItem('user')){
    //   console.log(localStorage.getItem('user'))
       this.router.navigate([data],{skipLocationChange:true})
   // }
    // else{
    //   this.googleAuth()
    // }
  }
  googleAuth(){
    this.fAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()).then((result) => {
      this.isEmailVerified=result.user!.emailVerified;
      localStorage.setItem('user',result.user!.emailVerified.toString());
      this.project()
    }).catch((e) => {
      alert("Error occurred "+e )
    })
  }
}
