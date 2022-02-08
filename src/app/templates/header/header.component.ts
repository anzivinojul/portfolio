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
    const cv_education = document.querySelector('.container-cv-education');
    const height = (cv_education.getBoundingClientRect().top + window.scrollY) - 128;

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    );
  }

  goProject(): void {
    const project = document.querySelector('.container-projects');
    const height = (project.getBoundingClientRect().top + window.scrollY) - 128;

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
    const height = (contact.getBoundingClientRect().top + window.scrollY);

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
