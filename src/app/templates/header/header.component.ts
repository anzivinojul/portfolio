import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  goLanding() {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
    )
  }

  goCV() {
    window.scrollTo(
      {
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      }
    )
  }

  ngOnInit(): void {
  }

}
