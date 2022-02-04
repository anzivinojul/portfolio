import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LandingComponent } from 'src/app/pages/landing/landing.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  constructor(
  ) { }

  @ViewChild(LandingComponent) landingComponent: LandingComponent;

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
    const landing = document.querySelector('.container-landing');
    const height = landing.clientHeight + 128;

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    )
  }

  goCV2() {
    const cv_work_experience = document.querySelector('.container-cv-work-experience');
    const height = (cv_work_experience.clientHeight + 128) * 3;

    window.scrollTo(
      {
        top: height,
        left: 0,
        behavior: 'smooth'
      }
    )
  }

  ngOnInit(): void {

  }

}
