import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Contact } from 'src/app/contact';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  constructor(private afs:AngularFirestore) { }
  name:any
  email:any
  message:any
  button:any
  
  ngOnInit(): void {
     this.name=document.getElementById('name')
      this.email=document.getElementById('email')
      this.message=document.getElementById('message')
      this.button=document.querySelector('.btn')
      console.log(this.button)
  }
  send(){
    
   if(this.name.value!=''&&this.email.value!=''&&this.message.value!=''){
      this.afs.collection('users').add({
      name:this.name.value,
      email:this.email.value,
      message:this.message.value
    }).then(result => {
      this.button.innerHTML = "<code>Success</code>"
      console.log(result)
     
    },err => {console.log(err)})
   }
   else{
     alert("just complete all fields 😒")
   }
   
}
}