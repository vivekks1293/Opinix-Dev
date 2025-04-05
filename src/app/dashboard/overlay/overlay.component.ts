import { Component } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'overlay',
  standalone: false,
  templateUrl: './overlay.component.html',
})
export class OverlayComponent {
  constructor(private dashboard: DashboardService) {}

  sidebarOpen() {
    return this.dashboard.sidebarOpen;
  }

  closeSidebar() {
    if(this.dashboard.isSmallMobileDevice())
      this.dashboard.closeSidebar();
  }
}
