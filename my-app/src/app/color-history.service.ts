import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ColorHistoryService {
  private historyUrl = 'http://localhost:8081/api/game-history';

  constructor(private http: HttpClient) {}

  // Log a game result for a user
  logGame(userId: number, result: string): Observable<any> {
    return this.http.post(`${this.historyUrl}/log?userId=${userId}&result=${result}`, {});
  }

  // Fetch game history for a specific user
  getUserHistory(userId: number): Observable<any> {
    return this.http.get(`${this.historyUrl}/${userId}`);
  }

  // Fetch all users' game histories (for admin)
  getAllUsersHistories(): Observable<any> {
    return this.http.get(`${this.historyUrl}/all`);
  }
}