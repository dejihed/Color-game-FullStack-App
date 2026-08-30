import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { HttpClientModule } from '@angular/common/http'; 
import { ColorHistoryService } from '../color-history.service'; 
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-game-history',
  standalone: true, 
  imports: [CommonModule, HttpClientModule],
  templateUrl: './game-history.component.html',
  styleUrls: ['./game-history.component.css']
})
export class GameHistoryComponent implements OnInit {
  gameHistory: any[] = [];

  constructor(
    private historyService: ColorHistoryService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const currentUser = this.authService.getCurrentUser();
    if (currentUser) {
      this.loadGameHistory(currentUser.id);
    }
  }

  loadGameHistory(userId: number) {
    this.historyService.getUserHistory(userId).subscribe(data => {
      this.gameHistory = data;
    });
  }
}