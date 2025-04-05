import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DashboardService {
  public sidebarOpen: boolean;
  public currentRoute: string;

  constructor() {
    this.sidebarOpen = false;
    this.currentRoute = '/';
  }

  openSidebar() {
    this.sidebarOpen = true;
  }

  closeSidebar() {
    this.sidebarOpen = false;
  }

  setCurrentRoute(value: string) {
    this.currentRoute = value;
  }

  isSmallMobileDevice() {
    const ua = navigator.userAgent.toLowerCase();
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);
    const isSmallScreen = window.innerWidth <= 768;
  
    return isMobile && isSmallScreen;
  }
}
