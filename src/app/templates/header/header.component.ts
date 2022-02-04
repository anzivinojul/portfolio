import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  goLanding(): void {
    window.scrollTo(
      {
        top: 0,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  goCV(): void {
    const landing = document.querySelector('.container-landing');
    const height = landing.clientHeight + 128;

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  goProject(): void {
    const cvWorkExperience = document.querySelector('.container-cv-work-experience');
    const height = (cvWorkExperience.clientHeight + 128) * 3;

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  ngOnInit(): void {

  }

}
