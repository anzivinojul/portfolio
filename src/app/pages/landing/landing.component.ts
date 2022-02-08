import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

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

  ngOnInit(): void {
  }

}
