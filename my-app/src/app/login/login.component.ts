import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: '', password: '' };
  loginError = false;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {}

  connected() {
    this.userService.login(this.loginData).subscribe({
      next: (response: any) => {
        console.log('Response:', response);  
  
        if (response && response.userId && response.role) {
          const user = { id: response.userId, role: response.role };
          this.authService.setCurrentUser(user);  
          this.authService.setConnected(true);  
          this.router.navigate(['/color-game']); 
        } else {
          this.loginError = true;
          console.error('Error: Missing user data in response');
        }
      },
      error: () => {
        this.loginError = true;
        console.error('Login failed');
      },
    });
  }
  
  
  

  reset() {
    this.loginError = false;
  }

  navigate() {
    this.router.navigate(['/sign-up']);
  }
}
