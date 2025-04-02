import { Component, Output } from '@angular/core';

@Component({
  selector: 'sidebar-header',
  standalone: false,
  templateUrl: './sidebar-header.component.html',
})
export class SidebarHeaderComponent {
  @Output() mobileOrientation: 'start' | 'end';
  styles: {
    mobileOrientation: {
      start: string;
      end: string;
    };
  };

  constructor() {
    this.mobileOrientation = 'end';
    this.styles = {
      mobileOrientation: {
        start: 'left-0',
        end: 'right-0',
      },
    };
  }
}
