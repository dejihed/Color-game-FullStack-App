import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public authServ: AuthService, private rout: Router) {}

  logout() {
    this.authServ.setConnected(false);  
    this.authServ.setCurrentUser(null); 
    this.rout.navigate(['/logout']); 
  }
}
