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
    if(this.isSmallMobileDevice())
      this.dashboard.closeSidebar();
  }

  isSmallMobileDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    const isSmallScreen = window.innerWidth <= 768; // You can adjust breakpoint if needed
  
    return isMobile && isSmallScreen;
  }
}
