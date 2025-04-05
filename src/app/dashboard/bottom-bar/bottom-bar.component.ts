import { Component, OnInit } from '@angular/core';
import {DashboardService} from "../dashboard.service";

@Component({
  selector: 'bottom-bar',
  standalone: false,
  templateUrl: './bottom-bar.component.html',
  styleUrl: './bottom-bar.component.css'
})
export class BottomBarComponent {
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
