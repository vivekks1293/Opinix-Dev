import { Component, Input, OnInit } from '@angular/core';
import {DashboardService} from "../../dashboard/dashboard.service";
@Component({
  selector: 'app-content',
  standalone: false,
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  question = 'Which Linux command is used to find the location of an executable file?';
  constructor(private dashboard: DashboardService) {
  }
  options: any[] = [
    { id: '1', text: 'find', votes: 285, percentage: 58 },
    { id: '2', text: 'which', votes: 79, percentage: 16 },
    { id: '3', text: 'locate', votes: 89, percentage: 18 },
    { id: '4', text: 'grep', votes: 39, percentage: 8 }
  ];

  timeLeftText = '6d left';

  ngOnInit(): void {
    this.dashboard.openSidebar();
  }
  handleVote(voteData: { id: string, text: string, votes: number, percentage: number }): void {
    console.log('Vote received:', voteData);
  }
}
