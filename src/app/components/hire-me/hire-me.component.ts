import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthComponent } from '../auth/auth.component';

@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent implements OnInit {

  constructor(private router: Router,private dialog:MatDialog) { }

  ngOnInit(): void {
  const element= <HTMLElement> document.querySelector('.intro-text p')
  const intro=<HTMLElement> document.querySelector('.intro-block')
  
   
  }
home(){
  this.router.navigate(['home'],{skipLocationChange:true})
}
project(){
  this.router.navigate(['project'],{skipLocationChange:true})
}
aboutMe(){
  this.dialog.open(AuthComponent)
}
}
