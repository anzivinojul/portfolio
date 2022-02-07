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
    const cvWorkExperience = document.querySelector('.container-projects');
    const height = (cvWorkExperience.clientHeight * 4) + (128 * 2);

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  goContact(): void {
    const contact = document.querySelector('.container-contact');
    const height = (contact.clientHeight * 5) + (128 * 2) ;

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
