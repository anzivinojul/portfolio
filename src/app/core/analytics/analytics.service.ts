import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var createAnalytics: (analyticsTrackingId: string) => void;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  init(): void {
    const analyticsTrackingId = environment.googleAnalyticsTrackingID;
    createAnalytics(analyticsTrackingId);
  }
}
