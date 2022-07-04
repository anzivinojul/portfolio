import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AnalyticsService } from 'src/app/core/analytics/analytics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly analyticsService: AnalyticsService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.analyticsService.init();

    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        (window as any).ga('set', 'page', event.urlAfterRedirects);
        (window as any).ga('send', 'pageview');
      }
    });
  }

}
