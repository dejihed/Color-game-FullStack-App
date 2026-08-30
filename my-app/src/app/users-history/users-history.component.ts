import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ColorHistoryService } from '../color-history.service';

@Component({
  selector: 'app-users-history',
  standalone: true, // Standalone component
  imports: [CommonModule, HttpClientModule], // Import modules here
  templateUrl: './users-history.component.html',
  styleUrls: ['./users-history.component.css'],
})
export class UsersHistoryComponent implements OnInit {
  allUsersHistories: any[] = [];
  loading = true;
  error: string | null = null;

  constructor(private historyService: ColorHistoryService) {}

  ngOnInit(): void {
    this.fetchAllUsersHistories();
  }

  fetchAllUsersHistories(): void {
    this.historyService.getAllUsersHistories().subscribe(
      (data) => {
        this.allUsersHistories = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Failed to fetch all users histories.';
        this.loading = false;
        console.error(error);
      }
    );
  }
}