import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'top-bar',
  standalone: false,
  templateUrl: './top-bar.component.html',
})
export class TopBarComponent implements OnInit {
  isMobile = false;
  constructor(private dashboard: DashboardService) {
  }
  ngOnInit(): void {
    this.isMobile = this.dashboard.isSmallMobileDevice();
    this.dashboard.closeSidebar();
  }
  openSidebar(){
    this.dashboard.openSidebar()
  }
}
