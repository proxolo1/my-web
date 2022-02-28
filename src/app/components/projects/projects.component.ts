import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    const showcase = <HTMLElement>document.querySelector(".showcase")
    const rectangle = document.querySelectorAll(".rectangle")
    const main = <HTMLElement>document.querySelector('.main')
    const home= <HTMLElement>document.querySelector('#home')
    const project = <HTMLElement>document.querySelector("#project")
    const hire= <HTMLElement>document.querySelector('#hire')
    // setInterval(() => {
    //   if (window.innerWidth < 500) {
    //     main.style.background="white"
    //     showcase.style.display = "block"
    //     rectangle.forEach((rect) => {
    //       rect.classList.remove('rectangle')
    //       rect.classList.add('rect')
    //     })
    //      home.style.color="black"
    //   project.style.color="black"
    //   hire.style.color="black"
    //   }
     
    // })
  }
  home(){
    this.router.navigate(['home'],{skipLocationChange:true})
  }
  hire(){
    this.router.navigate(['hire'],{skipLocationChange:true})
  }
}
